FROM node:alpine

EXPOSE 8000

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY index.js ./

RUN npm ci

CMD ["index.js"]
