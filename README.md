# amd-loader-proxy

A proxy to the AMD require function used in Episerver.

## Installation

### yarn

```
yarn add @episerver/amd-loader-proxy
```

### npm

```
npm install @episerver/amd-loader-proxy
```

## Importing

```js
import loader from "@episerver/amd-loader-proxy";
```

## Usage

The `@episerver/amd-loader-proxy` package exports a single function that takes the module ids as string parameters and returns a promise. This promise will resolve to an array containing the results for each module, e.g.:

```js
// Load a single AMD module.
loader("dojo/topic").then(([topic]) => {

});

// Load multiple AMD modules.
loader("dojo/topic", "epi-cms/plugin-area/navigation-tree").then(([topic, navigationTreePluginArea]) => {

});
```

Or if you are using async/await:

```js
const foo = async () => {
    // Load a single AMD module.
    const [topic] = await loader("dojo/topic");

    // Load multiple AMD modules.
    const [topic, navigationTreePluginArea] = await loader("dojo/topic", "epi-cms/plugin-area/navigation-tree");
}
```

## License

MIT © Episerver