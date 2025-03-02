<?php

namespace App\Infrastructure\Service\Logger;

use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class ApiListener implements EventSubscriberInterface
{
    public function __construct(
        protected LoggerInterface $logger,
        protected DataMasker $masker,
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => ['onRequest'],
            KernelEvents::RESPONSE => ['onResponse'],
        ];
    }

    public function onRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();

        if (false === $event->isMainRequest()
            || false === $this->supports($request)
        ) {
            return;
        }

        $this->logger->info('API Request', $this->getRequestContext($request));
    }

    public function onResponse(ResponseEvent $event): void
    {
        $request = $event->getRequest();

        if (false === $event->isMainRequest()
            || false === $this->supports($request)
        ) {
            return;
        }

        $response = $event->getResponse();

        $this->logger->info('API Response', [
            'body' => $response->getContent(),
        ]);
    }

    protected function getRequestContext(Request $request): array
    {
        return [
            //'headers' => $request->headers->all(),
            'payload' => $this->masker->mask($request->getPayload()->all()),
            ...($request->files->count() > 0)
                ? ['files' => \sprintf('%d files', $request->files->count())]
                : []
        ];
    }

    protected function supports(Request $request): bool
    {
        return \str_starts_with($request->getPathInfo(), '/api');
    }
}
