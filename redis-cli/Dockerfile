FROM alpine:3

RUN apk add --update redis

COPY file .
EXPOSE 6370
ENTRYPOINT [ "redis-cli" ]
