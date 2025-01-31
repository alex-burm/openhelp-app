docker-unit-up: generate-env
	@docker-compose --env-file documents/.env.local -f documents/docker-unit/docker-compose.yaml up --build

docker-unit-down:
	@docker-compose --env-file documents/.env.local -f documents/docker-unit/docker-compose.yaml down

docker-nginx-up: generate-env
	@docker-compose --env-file documents/.env.local -f documents/docker-nginx/docker-compose.yaml up --build

docker-nginx-down:
	@docker-compose --env-file documents/.env.local -f documents/docker-nginx/docker-compose.yaml down

docker-rr-up: generate-env
	@docker-compose --env-file documents/.env.local -f documents/docker-rr/docker-compose.yaml up --build

docker-rr-down:
	@docker-compose --env-file documents/.env.local -f documents/docker-rr/docker-compose.yaml down

docker-franken-up: generate-env
	@docker-compose --env-file documents/.env.local -f documents/docker-franken/docker-compose.yaml up --build

docker-franken-down:
	@docker-compose --env-file documents/.env.local -f documents/docker-franken/docker-compose.yaml down

generate-env:
	@if [ ! -f ./documents/.env.local ]; then \
		cp ./documents/.env.dist ./documents/.env.local && \
		if [ "$(shell uname)" = "Darwin" ]; then \
			sed -i '' "s/^DB_PASSWORD=/DB_PASSWORD=$(shell openssl rand -hex 8)/" ./documents/.env.local; \
			sed -i '' "s/^APP_SECRET=/APP_SECRET=$(shell openssl rand -hex 8)/" ./documents/.env.local; \
		else \
			sed -i "s/^DB_PASSWORD=/DB_PASSWORD=$(shell openssl rand -hex 8)/" ./documents/.env.local; \
			sed -i "s/^APP_SECRET=/APP_SECRET=$(shell openssl rand -hex 8)/" ./documents/.env.local; \
		fi \
	fi
