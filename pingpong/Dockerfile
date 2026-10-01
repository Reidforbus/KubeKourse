FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY index.js ./

RUN npm ci

EXPOSE 8003

CMD ["node", "index.js"]
