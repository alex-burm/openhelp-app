<?php

declare(strict_types=1);

namespace App\Tests\Unit\Application\User\Service;

use App\Application\User\Service\InvitationEmailConfirmationService;
use App\Domain\Mail\Outgoing\Service\MailHandlerInterface;
use App\Domain\Signature\SignerInterface;
use PHPUnit\Framework\TestCase;

final class InvitationEmailConfirmationServiceTest extends TestCase
{
    private MailHandlerInterface $mailHandler;
    private SignerInterface $signer;
    private InvitationEmailConfirmationService $service;

    protected function setUp(): void
    {
        $this->mailHandler = $this->createMock(MailHandlerInterface::class);
        $this->signer = $this->createMock(SignerInterface::class);
        $this->service = new InvitationEmailConfirmationService($this->mailHandler, $this->signer);
    }

    public function testSend(): void
    {
        $email = 'test@example.com';

        $this->signer->expects($this->once())
            ->method('sign')
            ->with($email)
            ->willReturn('signed-string');

        $this->mailHandler->expects($this->once())
            ->method('handle');

        $this->service->send($email);
    }

    public function testVerifyWithValidSignature(): void
    {
        $email = 'test@example.com';
        $signature = 'valid-signature';

        $this->signer->expects($this->once())
            ->method('verify')
            ->with($email, $signature)
            ->willReturn(true);

        $result = $this->service->verify($email, $signature);

        $this->assertTrue($result);
    }

    public function testVerifyWithInvalidSignature(): void
    {
        $email = 'test@example.com';
        $signature = 'invalid-signature';

        $this->signer->expects($this->once())
            ->method('verify')
            ->with($email, $signature)
            ->willReturn(false);

        $result = $this->service->verify($email, $signature);

        $this->assertFalse($result);
    }
}
