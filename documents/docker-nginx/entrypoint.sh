#!/bin/sh
set -e

apt-get update && apt-get install -y zip unzip gettext-base libzip-dev && docker-php-ext-install zip

curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && composer install

cp /app/.env /app/.env.dev.local

envsubst < /app/.env > /app/.env.dev.local

cat /app/.env.dev.local

exec "$@"
