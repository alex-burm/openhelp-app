<?php

namespace App\Infrastructure\Validation;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

class Iso8601DateTimeValidator extends ConstraintValidator
{
    public function validate(mixed $value, Constraint $constraint): void
    {
        if (false === ($constraint instanceof Iso8601DateTime)) {
            throw new \LogicException('Invalid constraint type');
        }

        if (\is_null($value) || \strlen($value) === 0) {
            return;
        }

        if (false === \is_string($value)) {
            throw new UnexpectedValueException($value, 'string');
        }

        try {
            new \DateTimeImmutable($value);
        } catch (\Throwable) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}
