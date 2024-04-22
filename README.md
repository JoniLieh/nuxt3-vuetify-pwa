# Nuxt 3 + Vuetify + PWA

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

> Simple Project with user login and pwa accessibility

## General Setup

1. *(required for PWA)* Generate frontend images depending on `/public/images/logo.svg` run `bun run generate-pwa-assets`
<small>(You need special sized images for PWA, if you don't have any, you can generate them)</small>
2. *VSCode Extensions* `Vue - Official`, `Nuxtr`, `Vue 3 Snippets`*
3. Install with `bun install` or `bun reset`

## Setup

### Production `http://localhost:3000`

`docker compose up`

or

```bash
# install dependencies
$ bun install

# build for production and launch server
$ bun run build
$ bun run start

# generate static project
$ bun run generate
```

### Development `http://localhost:3000`

* Also have API running via docker on `http://localhost`
* Have bun installed `curl -fsSL https://bun.sh/install | bash`

```sh
# install dependencies
bun install
# serve with hot reload at localhost:3000
bun run dev
```


### Cleanup Dockerfiles

`./docker-cleanup.sh`

## Packages

* `Nuxt`
* `Vuetify`
* `Vite/PWA`

## Info

* Proxy from frontend to backend, `const proxyTo` in `/nuxt.config.ts`

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).
