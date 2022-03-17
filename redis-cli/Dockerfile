FROM alpine:3

RUN apk add --update redis

COPY file /etc
EXPOSE 6370
ENTRYPOINT [ "redis-cli" ]
