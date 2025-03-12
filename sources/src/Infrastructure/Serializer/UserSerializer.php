<?php

namespace App\Infrastructure\Serializer;

use App\Domain\User\Entity\User;
use App\Infrastructure\Security\RoleMapper;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\DependencyInjection\Attribute\AsTaggedItem;

#[AsTaggedItem('serializer.normalizer')]
class UserSerializer implements NormalizerInterface, DenormalizerInterface
{
    public function normalize(mixed $data, string $format = null, array $context = []): array
    {
        if (!$data instanceof User) {
            return [];
        }

        $roles = $data->getRoles();
        return [
            'id' => $data->getId(),
            'email' => $data->getEmail(),
            'password' => $data->getPassword(),
            'name' => $data->getName(),
            'roles' => \is_null($roles) ? null : RoleMapper::fromCollection($roles),
        ];
    }

    public function denormalize(mixed $data, string $type, string $format = null, array $context = []): User
    {
        if (!is_array($data)) {
            throw new \InvalidArgumentException('Invalid data for User deserialization');
        }

        return new User(
            id: $data['id'],
            login: $data['login'],
            password: $data['password'],
            name: $data['name'],
            email: $data['email'],
            roles: RoleMapper::toCollection($data['roles']),
        );
    }

    public function supportsNormalization(mixed $data, string $format = null, array $context = []): bool
    {
        return $data instanceof User;
    }

    public function supportsDenormalization(mixed $data, string $type, string $format = null, array $context = []): bool
    {
        return $type === User::class;
    }

    public function getSupportedTypes(?string $format): array
    {
        return [
            User::class => true,
        ];
    }
}

