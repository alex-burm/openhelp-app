FROM ghcr.io/roadrunner-server/roadrunner:2024 as roadrunner
FROM php:8.3

RUN --mount=type=bind,from=mlocati/php-extension-installer:2,source=/usr/bin/install-php-extensions,target=/usr/local/bin/install-php-extensions \
     install-php-extensions @composer-2 opcache zip intl sockets protobuf imap redis pdo_mysql

COPY --from=roadrunner /usr/bin/rr /usr/local/bin/rr
EXPOSE 80/tcp

WORKDIR /app

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY rr.yaml /docker-entrypoint.d/rr.yaml
COPY entrypoint.sh /docker-entrypoint.d/entrypoint.sh
RUN chmod +x /docker-entrypoint.d/entrypoint.sh

CMD ["/docker-entrypoint.d/entrypoint.sh"]
