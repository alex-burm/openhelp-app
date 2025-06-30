<?php

namespace App\Infrastructure\Presentation\Web\Form;

use App\Infrastructure\Validation\NonExistingUserEmail;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\PasswordStrength;

class RegistrationUserForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('name', TextType::class, [
            'constraints' => [
                new Length(['min' => 2, 'max' => 255]),
            ]
        ]);

        $builder->add('password', PasswordType::class, [
            'constraints' => [
                new NotBlank(),
                new PasswordStrength(minScore: PasswordStrength::STRENGTH_MEDIUM),
            ]
        ]);
    }
}
