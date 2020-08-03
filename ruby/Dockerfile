FROM ruby:2-alpine

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL=ja_JP.UTF-8

WORKDIR /app/

RUN apk update && apk add   \
  tmux \
  bash \
  sudo \
  zsh \
  curl \
  tee