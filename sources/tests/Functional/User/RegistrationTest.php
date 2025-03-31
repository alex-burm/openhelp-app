<?php

declare(strict_types=1);

namespace App\Tests\Functional\User;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RegistrationTest extends WebTestCase
{
    

    public function testRegister()
    {
        $client = self::createClient();

        $crawler = $client->request('GET', '/register',
            [
                'login' => 'test',
                'password' => 'test',
                'name' => 'test',
                'email' => 'test',
            ]
        );

        $result = $crawler->text();
        $this->assertEquals('User registered. Please check your email.', $result);
    }
}