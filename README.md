## Webpack for Mono repo

This app is mainly a playground trying to configure Webpack from scratch to support a mono repo with multiple apps.

How to run client apps:

- cd into `client` directory and `npm i` to install dependencies
- `npm run build` to build all apps
- `npm run dev` to get into dev mode
- `npm run lint` to lint all projects

Note: If you run into error during `npm i`, please make sure you downgrade your `node` version to `v14` as `node-sass` in this project does not support the latest version of `node`.

How to run server app:

- cd into `server` directory and `npm i` to install dependencies
- `npm start` to launch an Express web server

Routes:

- `/` - an app launcher
- `/hello-world` - a static website
- `/kiwi` - a static website
- `/react` - a React app
- `/vue` - a Vue app

### Todo

- Use `ts-node` in the backend
- Apply `eslint` in the backend
- Implement the Express app properly (optimise routes config, add 404..etc)
- Try another Node.js framework?
