SHELL := /bin/bash
.PHONY: all test init build run down lock clean migrations migrate load-fixtures remove-db-volume clean-db reset-db messages compile-messages

test:
	docker-compose run web pytest

build:
	docker-compose build

run:
	DOCKER_COMMAND=--development docker-compose up

down:
	docker-compose down

clean:
	docker-compose down -v
	rm -rf .cache
	rm -rf build
	rm -rf dist
	rm -rf *.egg-info
	rm -rf htmlcov
	rm -rf .tox/
	rm -rf docs/_build
	@find . -name '*.pyc' -exec rm -rf {} \;
	@find . -name '__pycache__' -exec rm -rf {} \;
	@find . -name 'Thumbs.db' -exec rm -rf {} \;
	@find . -name '*~' -exec rm -rf {} \;


migrations:
	docker-compose run back-end-server python manage.py makemigrations
	
migrate:
	docker-compose run back-end-server python manage.py migrate

admin:
	docker-compose run back-end-server python manage.py createsuperuser
