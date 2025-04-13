<?php

namespace App\Infrastructure\Presentation\Web\Resolver;

use App\Infrastructure\Presentation\Web\Request\PublishMessageInput;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Controller\ValueResolverInterface;
use Symfony\Component\HttpKernel\ControllerMetadata\ArgumentMetadata;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

readonly class PublishMessageInputResolver implements ValueResolverInterface
{
    public function __construct(
        private ValidatorInterface $validator
    ) {}

    public function resolve(Request $request, ArgumentMetadata $argument): iterable
    {
        if ($argument->getType() !== PublishMessageInput::class) {
            return [];
        }

        $data = $request->toArray();

        $input = new PublishMessageInput;
        $input->id = $data['id'] ?? null;
        $input->text = $data['text'] ?? null;
        $input->channel = $data['channel'] ?? null;
        $input->datetime = $data['datetime'] ?? null;

        $errors = $this->validator->validate($input);
        if (\count($errors) > 0) {
            $messages = [];
            foreach ($errors as $error) {
                $messages[$error->getPropertyPath()] = $error->getMessage();
            }

            throw new BadRequestHttpException(\json_encode($messages));
        }

        yield $input;
    }
}
