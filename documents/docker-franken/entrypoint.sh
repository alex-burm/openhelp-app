#!/bin/sh

cp /app/.env /app/.env.dev.local
envsubst < /app/.env > /app/.env.dev.local
cat /app/.env.dev.local

composer install

frankenphp php-server --root /app/public public/index.php
