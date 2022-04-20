FROM alpine

RUN apk add --update redis

#EXPOSE 6370
ENTRYPOINT [ "redis-cli" ]
