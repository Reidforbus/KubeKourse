# PingPong

A simple program that responds with a running counter on `/pingpong`.

## Usage

### npm

You need to have npm installed.

To install the dependencies, run `npm ci`

Then, run the program with `node index.js`.

### Kubernetes

Use manifest files found in `./manifests` to run the app.

The ingress is configured [here](https://github.com/Reidforbus/KubeKourse/blob/1.9/logoutput/manifests/ingress.yaml).

When using ingress port 80 has to be exposed on the loadbalancer for the app to work.
