# Log Output

A simple program that generates a random hash at startup and logs it every 5 seconds. The current state is also served at port 8000.

## Usage

### npm

You need to have npm installed.

To install the dependencies, run `npm ci`

Then, run the program with `node index.js`.

### Kubernetes

Use manifest files found in `./manifests` to run the app.

You need to have port 80 exposed on the loadbalancer for the app to work.
