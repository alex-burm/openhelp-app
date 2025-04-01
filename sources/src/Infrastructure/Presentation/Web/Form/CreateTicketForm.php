<?php

namespace App\Infrastructure\Presentation\Web\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\PasswordStrength;
use Symfony\Component\Validator\Constraints\Regex;

class CreateTicketForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('userName', null, [
                'constraints' => [
                    new NotBlank(),
                    new Regex("/^[\p{L}\s\-']+$/u")
                ]
            ])
            ->add('userEmail', null, [
                'constraints' => [
                    new NotBlank(),
                    new Email(),
                ]
            ])
            ->add('ticketTitle', TextType::class)
            ->add('ticketMessage', TextareaType::class, [
                'constraints' => [
                    new Length([
                        'min' => 10,
                        'max' => 10000,
                    ]),
                    new NotBlank(),
                ]
            ]);
    }
}
