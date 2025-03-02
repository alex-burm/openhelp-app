<?php


namespace App\Infrastructure\Service\Logger;

use Monolog\LogRecord;
use Monolog\Processor\ProcessorInterface;
use Symfony\Bundle\SecurityBundle\Security;

class UserIdProcessor implements ProcessorInterface
{
    public function __construct(
        protected Security $security
    ) {
    }

    public function __invoke(LogRecord $record): LogRecord
    {
        $user = $this->security->getUser();
        if (false === \is_null($user)) {
            $record->extra['user_id'] = $user->getId();
        }

        return $record;
    }
}
