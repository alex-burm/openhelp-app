#!/bin/sh

cp /app/.env /app/.env.dev.local
envsubst < /app/.env > /app/.env.dev.local
cat /app/.env.dev.local

composer install
./bin/console doctrine:migrations:migrate --no-interaction

frankenphp php-server --root /app/public public/index.php
