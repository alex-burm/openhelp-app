<?php


namespace App\Infrastructure\Service;

use App\Domain\Mail\Outgoing\OutgoingMessageInterface;
use App\Domain\Mail\Outgoing\Service\MailHandlerInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Twig\Environment;

class MailHandler implements MailHandlerInterface
{
    public function __construct(
        protected WorkspaceContext $context,
        protected MailerInterface $mailer,
        protected Environment $twig
    ) {
    }

    public function handle(OutgoingMessageInterface $message): void
    {
        $template = 'shared/mail/' . $message->getTemplateName() . '.html.twig';

        $data = $message->getTemplateData();
        $data['workspace'] = $this->context->getCurrentWorkspace();

        $html = $this->twig->render($template, $data);

        $email = (new Email())
            ->to($message->getTo())
            ->from('user@localhost.com')
            ->subject($message->getSubject())
            ->html($html);

        $this->mailer->send($email);
    }
}
