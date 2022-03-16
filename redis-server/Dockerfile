FROM alpine:3

RUN apk add --update redis

COPY file2 /home/bome
EXPOSE 6379
ENTRYPOINT [ "redis-server" ]
