<?php

namespace App\Infrastructure\Validation;

use Symfony\Component\Validator\Constraint;

#[\Attribute(\Attribute::TARGET_PROPERTY)]
class Iso8601DateTime extends Constraint
{
    public string $message = 'The value "{{ value }}" is not a valid ISO 8601 datetime string.';
}
