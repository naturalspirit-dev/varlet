import vue from '@vitejs/plugin-vue'
import md from '@varlet/markdown-vite-plugin'
import jsx from '@vitejs/plugin-vue-jsx'
import { injectHtml } from 'vite-plugin-html'
import {
  ES_DIR,
  SITE,
  SITE_CONFIG,
  SITE_MOBILE_ROUTES,
  SITE_OUTPUT_PATH,
  SITE_PC_ROUTES,
  SITE_PUBLIC_PATH,
  UMD_DIR,
  VITE_RESOLVE_EXTENSIONS,
} from '../shared/constant'
import { InlineConfig, PluginOption } from 'vite'
import { get, kebabCase } from 'lodash'
import { resolve } from 'path'
import { readFileSync, removeSync, writeFileSync } from 'fs-extra'

export function getDevConfig(varletConfig: Record<string, any>): InlineConfig {
  const defaultLanguage = get(varletConfig, 'defaultLanguage')
  const host = get(varletConfig, 'host')

  return {
    root: SITE,
    resolve: {
      extensions: VITE_RESOLVE_EXTENSIONS,
      alias: {
        '@config': SITE_CONFIG,
        '@pc-routes': SITE_PC_ROUTES,
        '@mobile-routes': SITE_MOBILE_ROUTES,
      },
    },
    server: {
      port: get(varletConfig, 'port'),
      host: host === 'localhost' ? '0.0.0.0' : host,
    },
    publicDir: SITE_PUBLIC_PATH,
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      md({ style: get(varletConfig, 'highlight.style') }),
      jsx(),
      injectHtml({
        data: {
          pcTitle: get(varletConfig, `title[${defaultLanguage}]`),
          mobileTitle: get(varletConfig, `title[${defaultLanguage}]`),
          logo: get(varletConfig, `logo`),
          baidu: get(varletConfig, `analysis.baidu`, ''),
        },
      }),
    ],
  }
}

export function getBuildConfig(varletConfig: Record<string, any>): InlineConfig {
  const devConfig = getDevConfig(varletConfig)

  return {
    ...devConfig,
    build: {
      outDir: SITE_OUTPUT_PATH,
      brotliSize: false,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(SITE, 'index.html'),
          nested: resolve(SITE, 'mobile.html'),
        },
      },
    },
  }
}

function inlineCSS(fileName: string, dir: string): PluginOption {
  return {
    name: 'varlet-inline-css-vite-plugin',
    apply: 'build',
    closeBundle() {
      const cssFile = resolve(dir, 'style.css')
      const jsFile = resolve(dir, fileName)
      const cssCode = readFileSync(cssFile, 'utf-8')
      const jsCode = readFileSync(jsFile, 'utf-8')
      const injectCode = `;(function(){var style=document.createElement('style');style.type='text/css';\
style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(/\\/g, '\\\\')}\`));\
var head=document.querySelector('head');head.appendChild(style)})();`
      removeSync(cssFile)
      writeFileSync(jsFile, `${injectCode}${jsCode}`)
    },
  }
}

export function getUMDConfig(varletConfig: Record<string, any>): InlineConfig {
  const name = get(varletConfig, 'name')
  const fileName = `${kebabCase(name)}.js`

  return {
    logLevel: 'silent',
    build: {
      emptyOutDir: true,
      lib: {
        name,
        formats: ['umd'],
        fileName: () => fileName,
        entry: resolve(ES_DIR, 'umdIndex.js'),
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          dir: UMD_DIR,
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    plugins: [inlineCSS(fileName, UMD_DIR)],
  }
}
