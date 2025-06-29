<?php

namespace App\Infrastructure\Validation;

use Symfony\Component\Validator\Constraint;

#[\Attribute(\Attribute::TARGET_PROPERTY)]
class NonExistingUserEmail extends Constraint
{
    public string $message = 'User with email is already exists.';

    public function getTargets(): string
    {
        return self::PROPERTY_CONSTRAINT;
    }
}
