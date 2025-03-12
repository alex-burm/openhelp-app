<?php


namespace App\Infrastructure\Service\Logger;

class DataMasker
{
    protected array $sensitiveKeys = [
        'password',
        'token',
        'credit_card',
        'cvv',
        'email',
        'phone',
        'ssn',
        'secret'
    ];

    public function mask(array $data): array
    {
        return $this->recursiveMask($data);
    }

    protected function recursiveMask(array $data): array
    {
        foreach ($data as $key => $value) {
            if ($this->isSensitiveKey($key)) {
                $data[$key] = $this->maskString($value);
            } elseif (\is_array($value)) {
                $data[$key] = $this->recursiveMask($value);
            }
        }
        return $data;
    }

    protected function maskString(string $value): string
    {
        $length = \mb_strlen($value);
        if ($length <= 4) {
            return '***';
        }

        if (\filter_var($value, FILTER_VALIDATE_EMAIL)) {
            return $this->maskEmail($value);
        }

        return $this->maskGeneral($value);
    }

    protected function maskEmail(string $email): string
    {
        [$name, $domain] = explode('@', $email);
        $maskedName = $this->maskGeneral($name);
        return $maskedName . '@' . $domain;
    }

    protected function maskGeneral(string $value): string
    {
        $length = \mb_strlen($value);
        $visiblePart = \max(1, (int)($length * 0.2));
        $hiddenPart = $length - ($visiblePart * 2);

        if ($hiddenPart <= 0) {
            return \str_repeat('*', $length);
        }

        return \mb_substr($value, 0, $visiblePart) . \str_repeat('*', $hiddenPart) . \mb_substr($value, -$visiblePart);
    }


    protected function isSensitiveKey(string $key): bool
    {
        return \in_array(\strtolower($key), $this->sensitiveKeys, true);
    }
}
