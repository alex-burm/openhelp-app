<?php

declare(strict_types=1);

namespace App\Tests\Unit\Application\User\Service;

use App\Application\User\Dto\InviteUsersDto;
use App\Application\User\Service\EmailInvitationService;
use App\Domain\Mail\Outgoing\Service\MailHandlerInterface;
use App\Domain\Signature\SignerInterface;
use PHPUnit\Framework\TestCase;

final class EmailInvitationServiceTest extends TestCase
{
    private MailHandlerInterface $mailHandler;
    private SignerInterface $signer;
    private EmailInvitationService $service;

    protected function setUp(): void
    {
        $this->mailHandler = $this->createMock(MailHandlerInterface::class);
        $this->signer = $this->createMock(SignerInterface::class);
        $this->service = new EmailInvitationService($this->mailHandler, $this->signer);
    }

    public function testInviteWithValidEmails(): void
    {
        $emails = ['test1@example.com', 'test2@example.com'];
        $dto = new InviteUsersDto($emails);

        $this->signer->expects($this->exactly(2))
            ->method('sign')
            ->willReturn('signed-string');

        $this->mailHandler->expects($this->exactly(2))
            ->method('handle');

        $this->service->invite($dto);
    }

    public function testInviteWithDuplicateEmails(): void
    {
        $emails = ['test1@example.com', 'test1@example.com'];
        $dto = new InviteUsersDto($emails);

        $this->signer->expects($this->once())
            ->method('sign')
            ->with('test1@example.com')
            ->willReturn('signed-string');

        $this->mailHandler->expects($this->once())
            ->method('handle');

        $this->service->invite($dto);
    }

    public function testInviteWithEmptyAndWhitespaceEmails(): void
    {
        $emails = ['  test1@example.com  ', '', 'test2@example.com'];
        $dto = new InviteUsersDto($emails);

        $this->signer->expects($this->exactly(2))
            ->method('sign')
            ->with($this->logicalOr(
                $this->equalTo('test1@example.com'),
                $this->equalTo('test2@example.com')
            ))
            ->willReturn('signed-string');

        $this->mailHandler->expects($this->exactly(2))
            ->method('handle');

        $this->service->invite($dto);
    }

    public function testInviteWithEmptyArray(): void
    {
        $dto = new InviteUsersDto([]);

        $this->signer->expects($this->never())->method('sign');
        $this->mailHandler->expects($this->never())->method('handle');

        $this->service->invite($dto);
    }

    public function testConfirmWithValidSignature(): void
    {
        $email = 'test@example.com';
        $signature = 'valid-signature';

        $this->signer->expects($this->once())
            ->method('verify')
            ->with($email, $signature)
            ->willReturn(true);

        $result = $this->service->confirm($email, $signature);

        $this->assertTrue($result);
    }

    public function testConfirmWithInvalidSignature(): void
    {
        $email = 'test@example.com';
        $signature = 'invalid-signature';

        $this->signer->expects($this->once())
            ->method('verify')
            ->with($email, $signature)
            ->willReturn(false);

        $result = $this->service->confirm($email, $signature);

        $this->assertFalse($result);
    }
}
