.PHONY: docker-build docker-run docker-stop

docker-build:
	docker build . -t greeter-api

docker-run:
	docker run --rm --name greeter-api -e PORT=8000 -p 8000:8000 -d greeter-api

docker-logs:
	docker logs -f greeter-api

docker-stop:
	docker stop greeter-api
