<?php

namespace App\Infrastructure\Presentation\Web\Exception;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class ValidationException extends HttpException
{
    public function __construct(ConstraintViolationListInterface $violations)
    {
        $errors = [];

        foreach ($violations as $violation) {
            $property = $violation->getPropertyPath();
            $errors[$property][] = $violation->getMessage();
        }

        parent::__construct(
            Response::HTTP_UNPROCESSABLE_ENTITY,
            \json_encode(['errors' => $errors])
        );
    }
}
