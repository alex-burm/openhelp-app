<?php


namespace App\Infrastructure\Service\Logger;

use Monolog\LogRecord;
use Monolog\Processor\ProcessorInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class RequestIdProcessor implements ProcessorInterface
{
    public function __construct(
        protected RequestStack $requestStack
    ) {
    }

    public function __invoke(LogRecord $record): LogRecord
    {
        $request = $this->requestStack
            ->getMainRequest();

        if (\is_null($request)) {
            return $record;
        }

        $record->extra['request_id'] = $request->headers->get('X-Request-Id')
            ?? \bin2hex(\random_bytes(16));;

        return $record;
    }
}
