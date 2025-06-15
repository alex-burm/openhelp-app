
# OpenHelp

**OpenHelp** is a modern, open-source help-desk system built using **DDD (Domain-Driven Design)** principles. It is developed as part of the educational YouTube channel [Александр, айти-наставник](https://www.youtube.com/@BurmAlex), where the full development journey is shared: from architecture to production.

## 🚀 Features

- 📩 Ticketing system: create tickets, reply to them, manage status and history
- 📚 Knowledge base: searchable articles and categories
- 💬 Built-in chat system (powered by Centrifugo)
- 🧠 Clean DDD structure with focus on maintainability and business logic clarity

## ⚙️ Tech Stack

**Backend:**

- PHP 8.3
- Symfony 7
- Doctrine DBAL
- Redis
- Centrifugo

**Frontend:**

- Vue 3
- Pinia
- Centrifugo client

**DevOps:**

- Docker + Makefile
- MySQL, Redis

## 🧪 Installation & Launch

```bash
git clone https://github.com/alex-burm/openhelp-app.git
cd openhelp-app/documents

# Build and start containers
make docker-franken-up
```

📺 Follow the Development
This project is being built in public. Full development process is shared on YouTube:

👉 [OpenHelp.dev — HelpDesk проект на Symfony и DDD подходом](https://www.youtube.com/playlist?list=PLQA8o9MSrB3Dj_FYJ7xHHNeLi0K-mrdHz)

## 🙏 Acknowledgements

The **OpenHelp** project wouldn't be possible without the following amazing tools and services:

- [Centrifugo](https://centrifugal.dev/) — real-time messaging server powering our chat
- [Docker](https://www.docker.com/) — containerization platform for easy development and deployment
- [PhpStorm](https://www.jetbrains.com/phpstorm/) — powerful PHP IDE by JetBrains
- [Redis](https://redis.io/) — in-memory data store for caching and queues
- [MySQL](https://www.mysql.com/) — reliable relational database
- [Nginx](https://nginx.org/) — high-performance web server and reverse proxy
- [FrankenPHP](https://frankenphp.dev/) — modern PHP application server with built-in async support
- [Vue.js](https://vuejs.org/) — progressive JavaScript framework for building UI
- [PHPUnit](https://phpunit.de/) — testing framework for PHP
- [Sentry](https://sentry.io/) — error tracking and performance monitoring
- [Monolog](https://github.com/Seldaek/monolog) — logging library for PHP
- [StackEdit](https://stackedit.io/) — awesome in-browser Markdown editor
- [GitHub](https://github.com/) — collaborative platform for open-source development

With heartfelt thanks to all these projects ❤️
