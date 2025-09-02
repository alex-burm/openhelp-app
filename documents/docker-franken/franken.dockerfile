FROM dunglas/frankenphp:1-php8.3

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libzip-dev \
    gettext-base \
    libkrb5-dev \
    libssl-dev \
    libicu-dev \
    build-essential \
    && apt-get clean

RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install intl
RUN docker-php-ext-enable pdo_mysql

RUN pecl install xdebug && docker-php-ext-enable xdebug
RUN pecl install redis && docker-php-ext-enable redis
RUN pecl install apcu && docker-php-ext-enable apcu

RUN echo "deb http://deb.debian.org/debian bullseye main" > /etc/apt/sources.list.d/bullseye.list
RUN apt-get update && apt-get install -y --no-install-recommends \
    libkrb5-dev \
    libc-client-dev \
    libssl-dev

RUN docker-php-ext-configure imap --with-kerberos --with-imap-ssl
RUN docker-php-ext-install imap

COPY frankenphp.ini /etc/frankenphp.ini

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY entrypoint.sh /docker-entrypoint.d/entrypoint.sh
RUN chmod +x /docker-entrypoint.d/entrypoint.sh

CMD ["/docker-entrypoint.d/entrypoint.sh"]


