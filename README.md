# Financial App Admin

## Setup

Use NodeJS 16.20.2. (We recommend using `nvm` to manage multiple NodeJS versions.)

To install packages:

```
npm install
```

To start the app:

The frontend app expects the [the backend](https://github.com/Dollars-and-Sense/finapp-API) to be running as well as MongoDB. Once those are up and running, do the following:

```
npm start
```

## Links

[Repo](https://github.com/Dollars-and-Sense/Financial-App-Admin)

## To Fix

### Upgrade Node

Upgrading to NodeJS 18 will help fix some issues, such as the unsupported engine problems we are seeing with NodeJS 16. But the app does not load currently with 18 (or 22, which we also tried).

```
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'cheerio@1.0.0',
npm WARN EBADENGINE   required: { node: '>=18.17' },
npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'undici@6.19.8',
npm WARN EBADENGINE   required: { node: '>=18.17' },
npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'whatwg-encoding@3.1.1',
npm WARN EBADENGINE   required: { node: '>=18' },
npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'whatwg-mimetype@4.0.0',
npm WARN EBADENGINE   required: { node: '>=18' },
npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: '8.19.4' }
npm WARN EBADENGINE }
```

### Fix warnings

There are numerous issues we are warned about, such as unused variables, using `==` instead of `===`, etc.
