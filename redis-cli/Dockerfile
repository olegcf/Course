FROM alpine:3

RUN apk add --update redis

COPY file /home
EXPOSE 6370
ENTRYPOINT [ "redis-cli" ]
