# todo app

## Usage

### Kubernetes

Make sure you have port 80 on the load balancer open.
You can run the server by applying the manifest files in `./manifests` with

```bash
kubectl apply -f manifests
```

### Bun

This project was created using `bun init` in bun v1.4.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Configuration

The listening port of the express app can be set with the `PORT` env variable. The default port is 3001.
