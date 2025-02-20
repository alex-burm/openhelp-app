<?php

namespace App\Infrastructure\Presentation\Web\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\PasswordStrength;

class ChangePasswordForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('password', RepeatedType::class, [
            'required' => false,
            'mapped' => false,
            'type' => PasswordType::class,
            'first_options'  => ['label' => 'New password', 'always_empty' => true,],
            'second_options' => ['label' => 'Confirm password', 'always_empty' => true],
            'constraints' => [
                new NotBlank(),
                new PasswordStrength(minScore: PasswordStrength::STRENGTH_STRONG),
            ]
        ]);
        /**
         * STRENGTH_WEAK (1) — 6 chars
         * STRENGTH_MEDIUM (2) → 7 chars, numbers + letters
         * STRENGTH_STRONG (3) → 8 chars, numbers + letters + spec
         * STRENGTH_VERY_STRONG (4) → 8 chars, upper + lower + numbers + spec
         */
    }
}
