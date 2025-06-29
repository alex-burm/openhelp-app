<?php

namespace App\Infrastructure\Presentation\Web\Form;

use App\Infrastructure\Validation\NonExistingUserEmail;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;

class RegistrationEmailForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('email', EmailType::class, [
            'required' => false,
            'constraints' => [
                new NotBlank(),
                new Email(),
                new NonExistingUserEmail(),
            ]
        ]);
    }
}
