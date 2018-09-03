NVM := $(shell command -v nvm 2> /dev/null)
NODE := $(shell command -v node 2> /dev/null)
YARN := $(shell command -v yarn 2> /dev/null)

all:
ifndef NODE
ifndef NVM
	$(error "could not find node or nvm")
endif
	nvm install node
endif

ifndef YARN
	$(error "could not find yarn, see: https://yarnpkg.com/en/docs/install")
endif
	yarn install
	yarn build

.PHONY: clean
clean:
	rm -f dist/*.js dist/*.map dist/*.css *.log
