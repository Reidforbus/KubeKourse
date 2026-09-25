FROM node:alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm ci

EXPOSE 8002

CMD ["node", "index.js"]
