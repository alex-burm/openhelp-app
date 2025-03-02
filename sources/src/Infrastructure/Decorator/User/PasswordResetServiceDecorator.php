<?php

namespace App\Infrastructure\Decorator\User;

use App\Application\User\Dto\PasswordChangeRequestDto;
use App\Application\User\Dto\PasswordResetRequestDto;
use App\Application\User\Dto\PasswordResetTokenDto;
use App\Application\User\Service\PasswordResetService;
use App\Application\User\Service\PasswordResetServiceInterface;
use App\Domain\User\Event\PasswordChangeRequestedEvent;
use App\Domain\User\Event\PasswordResetRequestedEvent;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\Attribute\AsDecorator;
use Symfony\Component\DependencyInjection\Attribute\AutowireDecorated;
use Symfony\Component\DependencyInjection\Attribute\When;

#[When(env: 'dev')]
#[AsDecorator(decorates: PasswordResetService::class)]
class PasswordResetServiceDecorator implements PasswordResetServiceInterface
{
    public function __construct(
        #[AutowireDecorated]
        protected PasswordResetService $inner,
        protected LoggerInterface $logger,
    ) {
    }

    protected function logBefore(string $method, array $context = []): static
    {
        $this->logger->info(\sprintf('Method "%s" calling', $method), $context);
        return $this;
    }

    protected function logAfter(string $method, array $context = []): static
    {
        $this->logger->info(\sprintf('Method "%s" called', $method), $context);
        return $this;
    }

    public function forgotPassword(PasswordResetRequestDto $data): ?PasswordResetRequestedEvent
    {
        $this->logBefore(__METHOD__, ['data' => $data]);
        $result = $this->inner->forgotPassword($data);
        $this->logAfter(__METHOD__, ['result' => $result]);
        return $result;
    }

    public function changePassword(PasswordChangeRequestDto $data): ?PasswordChangeRequestedEvent
    {
        $this->logBefore(__METHOD__, ['data' => $data]);
        $result = $this->inner->changePassword($data);
        $this->logAfter(__METHOD__);
        return $result;
    }

    public function validateToken(PasswordResetTokenDto $data): bool
    {
        $this->logBefore(__METHOD__, ['data' => $data]);
        $result = $this->inner->validateToken($data);
        $this->logAfter(__METHOD__, ['result' => $result]);
        return $result;
    }
}
