FROM node:alpine

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL=ja_JP.UTF-8

WORKDIR /app/

# RUN yarn install 
RUN apk update && apk add   \
  tzdata && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  apk del tzdata && \
  rm -rf /var/cache/apk/*
# RUN apk add 
# 本番用にコードを作成している場合
# RUN npm install --only=production

COPY . .

# EXPOSE 5500
# CMD [ "yarn","dev"]