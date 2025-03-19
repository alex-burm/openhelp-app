<?php


namespace App\Infrastructure\Mail\Imap;

namespace App\Infrastructure\Mail\Imap;

use App\Domain\Mail\Incoming\Service\MailFetcherInterface;
use App\Domain\Mail\Incoming\ValueObject\FetchedEmailMessage;

class ImapMailFetcher implements MailFetcherInterface
{
    protected ?\IMAP\Connection $connection = null;

    public function __construct(
        protected string $host = 'localhost',
        protected int    $port = 587,
        protected string $username = 'root',
        protected string $password = '',
        protected bool   $useTls = true,
    ) {
    }

    public function setHost(string $host): static
    {
        $this->host = $host;
        return $this;
    }

    public function setPort(int $port): static
    {
        $this->port = $port;
        return $this;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;
        return $this;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;
        return $this;
    }

    protected function getConnection(): ?\IMAP\Connection
    {
        if (\is_null($this->connection)) {
            $tlsFlag = $this->useTls ? '/ssl' : '/notls';
            $mailbox = '{' . $this->host . ':' . $this->port . '/imap' . $tlsFlag . '}INBOX';

            $connection = \imap_open($mailbox, $this->username, $this->password);
            if (false === ($connection instanceof \IMAP\Connection)) {
                throw new \RuntimeException(\sprintf('IMAP connection error: ' . \imap_last_error()));
            }

            $this->connection = $connection;
        }
        return $this->connection;
    }

    public function fetch(): ?FetchedEmailMessage
    {
        $messages = \imap_search($this->getConnection(), 'UNSEEN');

        if (false === \is_array($messages)) {
            return null;
        }
        foreach ($messages as $messageId) {
            $header = \imap_headerinfo($this->getConnection(), $messageId);
            $structure = \imap_fetchstructure($this->getConnection(), $messageId);
            $body = $this->getBody($messageId, $structure);

            \imap_setflag_full($this->getConnection(), $messageId, "\\Seen");

            $from = \current($header->from);
            $email = $from->mailbox . '@' . $from->host;
            $name = \strlen($from?->personal ?? '') > 0 ? $from->personal : $email;
            return new FetchedEmailMessage(
                name: $name,
                address: $email,
                subject: $header->subject ?? FetchedEmailMessage::DEFAULT_SUBJECT,
                body: $body,
            );
        }

        return null;
    }

    private function getBody(int $emailId, object $structure): string
    {
        $body = '';

        if (false === isset($structure->parts)) {
            $body = \imap_body($this->connection, $emailId);
            return $this->decodeContent($body, $structure->encoding);
        }

        foreach ($structure->parts as $partIndex => $part) {
            switch ($part->type) {
                case 0: // text plain or html
                    $text = \imap_fetchbody($this->connection, $emailId, $partIndex + 1);
                    $body .= $this->decodeContent($text, $part->encoding);
                    break;
                case 1: // multipart
                    break;
                case 2: // forwarded message
                    $nestedStructure = \imap_fetchstructure($this->connection, $emailId);
                    $body .= $this->getBody($emailId, $nestedStructure);
                    break;
                case 3: // binary (pdf,zip, ..)
                case 4: // audio
                case 5: // image
                case 6: // video
                case 7: // other
                    // attachment processing
                    break;
            }
        }

        return \trim(\strip_tags($body));
    }

    private function decodeContent(string $content, int $encoding): string
    {
        return match ($encoding) {
            3 => \base64_decode($content),
            4 => \quoted_printable_decode($content),
            default => $content,
        };
    }

    public function close(): void
    {
        if ($this->connection) {
            \imap_close($this->connection);
        }
    }

    public function __destruct()
    {
        $this->close();
    }
}
