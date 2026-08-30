FROM oven/bun:alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY bun.lock ./
COPY index.ts ./

RUN bun install

ENTRYPOINT ["bun"]

CMD ["run", "index.ts"]
