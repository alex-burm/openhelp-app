<?php

namespace App\Infrastructure\Validation;

use App\Domain\User\Repository\UserRepositoryInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

final class NonExistingUserEmailValidator extends ConstraintValidator
{
    public function __construct(
        protected readonly UserRepositoryInterface $userRepository,
    ) {
    }

    public function validate($value, Constraint $constraint): void
    {
        if (false === ($constraint instanceof NonExistingUserEmail)) {
            throw new \LogicException('Invalid constraint type');
        }

        if (\is_null($value) || \strlen($value) === 0) {
            return;
        }

        if (false === \is_null($this->userRepository->findOneByEmail($value))) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}
