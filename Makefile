install:
	yarn

dev: install
	yarn webpack --mode=development --watch --config config/webpack.dev.js

build: install clear
	yarn webpack --mode=production --config config/webpack.prod.js

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
