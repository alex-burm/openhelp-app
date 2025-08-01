<?php

namespace App\Infrastructure\Presentation\Web\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Symfony\Component\Validator\Constraints as Assert;

class ForgotPasswordResendForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('key', HiddenType::class, [
            'constraints' => [
                new Assert\NotBlank(),
            ],
        ]);
        $builder->add('signature', HiddenType::class, [
            'constraints' => [
                new Assert\NotBlank(),

            ],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'csrf_protection' => false,
            'constraints' => [
                new Assert\Callback(static function (array $payload, ExecutionContextInterface $context) {
                    $email = base64_decode($payload['key']);
                    $signature = \hash_hmac('sha256', $email, $_ENV['APP_SECRET']);

                    if ($signature !== $payload['signature']) {
                        $context->buildViolation('Invalid token.')
                            ->atPath('signature')
                            ->addViolation();
                    }
                }),
            ]
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
