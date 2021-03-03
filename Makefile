TAG?=12-alpine

docker:
	docker build \
		. \
		-t nystudio107/retour-buildchain:${TAG} \
		--build-arg TAG=${TAG} \
		--no-cache
npm:
	docker container run \
		--name retour-buildchain \
		--network plugindev_default \
		--rm \
		-t \
		-p 8080:8080 \
		-v `pwd`:/app \
		nystudio107/retour-buildchain:${TAG} \
		$(filter-out $@,$(MAKECMDGOALS))
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
