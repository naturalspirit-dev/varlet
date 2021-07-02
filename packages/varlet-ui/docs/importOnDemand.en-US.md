# Import On Demand

### Intro
The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.


### Install method

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

createApp().use(Button)
```

The logical part and style part of the component are installed as above, but this setup is relatively tedious
Best practices based on `Webpack` and `Vite` build tools are recommended here
### Webpack
```shell
# Install plugin
# npm
npm i babel-plugin-import -D 
# yarn
yarn add babel-plugin-import -D
```

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@varlet/ui',
        libraryDirectory: 'es',
        style: true,
      },
      '@varlet/ui',
    ],
  ],
};
```

After the configuration is complete, 
the plugin automatically loads the style files required for the component when it is introduced, 
using the following method

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'

createApp().use(Button)
```

### Vite

```shell
# Install plugin
# npm
npm i vite-plugin-components -D
# yarn
yarn add i vite-plugin-components -D
```

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import ViteComponents, { VarletUIResolver } from 'vite-plugin-components'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [VarletUIResolver()]
    })
  ]
})
```

After the configuration is complete, 
the component is used directly as follows, and the plugin automatically introduces component-related dependencies

```html
<var-button>Default Button</var-button>
```

Note that if you are using a function component you still need to import it manually,
like `ImagePreview`

```js
import { createApp } from 'vue'
import { ImagePreview } from '@varlet/ui'
import '@varlet/ui/es/image-preview/style/index.js'

createApp().use(ImagePreview)
```

