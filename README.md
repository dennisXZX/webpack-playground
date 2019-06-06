## Webpack for Mono repo

This app is mainly a playground trying to configure Webpack from scratch to support a mono repo with multiple apps.

How to run client apps:

- cd into client and `npm i` to install dependencies
- `npm run build` to build all apps
- `npm run dev` to get into dev mode
- `npm run lint` to lint all projects

How to run server app:

- cd into server and `npm i` to install dependencies
- `npm start` to launch an Express web server

Routes:

- /hello-world - a static website
- /kiwi - a static website
- /react - a React app
- /vue - a Vue app 

### Todo

- use ts-node in the backend
- apply eslint in the backend
- create a vue app
- implement the express app properly (optimise routes config, add 404..etc)
- try another nodejs framework?