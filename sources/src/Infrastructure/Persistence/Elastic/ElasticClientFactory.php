<?php

namespace App\Infrastructure\Persistence\Elastic;

use Elastic\Elasticsearch\Client;
use Elastic\Elasticsearch\ClientBuilder;

final class ElasticClientFactory
{
    public static function create(): Client
    {
        return ClientBuilder::create()
            ->setHosts(\explode(',', $_ENV['ELASTICSEARCH_HOSTS']))
            ->build();
    }
}
