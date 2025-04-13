<?php

namespace App\Infrastructure\Presentation\Web\Validator;

use App\Infrastructure\Presentation\Web\Request\PublishMessageInput;
use Symfony\Component\Validator\ConstraintViolationListInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class PublishMessageValidator
{
    public function __construct(
        protected readonly ValidatorInterface $validator
    ) {
    }

    public function validate(array $data): ConstraintViolationListInterface
    {
        $input = new PublishMessageInput();
        $input->channel = $data['channel'] ?? '';
        $input->content = $data['content'] ?? '';

        return $this->validator->validate($input);
    }
}
