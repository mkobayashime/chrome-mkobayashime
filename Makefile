install:
	yarn

dev: install
	ENV_DEV=true yarn webpack --watch

build: install clear
	yarn webpack

clear: install
	yarn rimraf build

lint: install
	yarn eslint .

lint.fix: install
	yarn eslint --fix .

format: install
	yarn prettier --write .

format.check: install
	yarn prettier --check .
