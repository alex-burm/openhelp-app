<?php


namespace App\Infrastructure\Service;

use App\Domain\Mail\MailMessageInterface;
use App\Domain\Service\MailHandlerInterface;
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

    public function handle(MailMessageInterface $notification): void
    {
        $template = 'shared/mail/' . $notification->getTemplateName() . '.html.twig';

        $data = $notification->getTemplateData();
        $data['workspace'] = $this->context->getCurrentWorkspace();

        $html = $this->twig->render($template, $data);

        $email = (new Email())
            ->to($notification->getTo())
            ->from('user@localhost.com')
            ->subject($notification->getSubject())
            ->html($html);

        $this->mailer->send($email);
    }
}
