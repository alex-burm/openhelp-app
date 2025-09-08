<?php

namespace App\Domain\Category\ValueObject;

enum DefaultCategoryEnum: string
{
    case GETTING_STARTED = 'Getting Started';
    case TROUBLESHOOTING = 'Troubleshooting';
    case ACCOUNT_BILLING = 'Account & Billing';
    case USER_GUIDES = 'User Guides';
    case FAQ = 'FAQ';

    public function getDescription(): string
    {
        return match($this) {
            self::GETTING_STARTED => 'Articles on how to register, log in, set up a profile, and take the first steps with your system.',
            self::TROUBLESHOOTING => 'Sections dedicated to common errors, bugs, and their solutions.',
            self::ACCOUNT_BILLING => 'Information about pricing plans, payment methods, subscription management, password changes, and account recovery.',
            self::USER_GUIDES => 'Detailed instructions on how to use the main features and functionalities of your system.',
            self::FAQ => 'A collection of answers to the most common questions.',
        };
    }
}
