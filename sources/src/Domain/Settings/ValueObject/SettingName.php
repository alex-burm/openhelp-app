<?php

namespace App\Domain\Settings\ValueObject;

enum SettingName: string
{
    case IMAP_USERNAME      = 'imap_username';
    case IMAP_PASSWORD      = 'imap_password';
    case IMAP_HOSTNAME      = 'imap_hostname';
    case IMAP_PORT          = 'imap_port';
    case BRANDING_LOGO_URL  = 'branding_logo_url';
    case BRANDING_ICON_URL  = 'branding_icon_url';

    public static function getDefault(self $key): ?string
    {
        return match ($key) {
            self::IMAP_USERNAME,
            self::IMAP_PASSWORD => null,
            self::BRANDING_LOGO_URL => '/assets/img/logo.svg',
            self::BRANDING_ICON_URL => '/favicon.ico',
        };
    }

    public static function isSensitive(self $key): bool
    {
        return \in_array($key, [
            self::IMAP_USERNAME,
            self::IMAP_PASSWORD,
        ], true);
    }
}
