FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

RUN apt-get update && apt-get install -y \
    build-essential \
    software-properties-common \
    curl \
    libssl-dev \
    zlib1g-dev \
    libxml2-dev \
    libsqlite3-dev \
    libonig-dev \
    libcurl4-openssl-dev \
    libreadline-dev \
    libzip-dev


RUN add-apt-repository ppa:ondrej/php -y && apt-get update
RUN apt-get install -y \
    php8.3-cli \
    php8.3-dev \
    php8.3-fpm \
    php8.3-mysql \
    php8.3-xml \
    php8.3-mbstring \
    php8.3-curl

RUN curl -O https://www.php.net/distributions/php-8.3.0.tar.gz && \
    tar -xzf php-8.3.0.tar.gz && \
    cd php-8.3.0 && \
    ./configure --prefix=/usr \
                --enable-embed=shared \
                --with-curl \
                --with-openssl \
                --with-zlib && \
    make -j$(nproc) && \
    make install && \
    cd .. && rm -rf php-8.3.0 php-8.3.0.tar.gz

RUN curl -O https://unit.nginx.org/download/unit-1.34.1.tar.gz && \
    tar -xzf unit-1.34.1.tar.gz && \
    cd unit-1.34.1 && \
    ./configure --prefix=/usr \
                --statedir=/var/lib/unit \
                --control=unix:/var/run/control.unit.sock \
                --runstatedir=/var/run \
                --pid=/var/run/unit.pid \
                --logdir=/var/log \
                --log=/var/log/unit.log \
                --tmpdir=/var/tmp \
                --user=www-data \
                --group=www-data \
                --openssl \
                --modulesdir=/usr/lib/unit/modules \
                --libdir=/usr/lib/aarch64-linux-gnu && \
    ./configure php --module=php83 --config=/usr/bin/php-config && \
    make && \
    make install

WORKDIR /app

COPY ./unit.json /docker-entrypoint.d/config.json
COPY ./unit.json /etc/unit/unit.json

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
