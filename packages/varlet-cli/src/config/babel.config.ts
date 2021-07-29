import { ConfigAPI } from '@babel/core'

type PresetOption = {
  loose?: boolean
  enableObjectSlots?: boolean
}

module.exports = (api?: ConfigAPI, options: PresetOption = {}) => {
  if (api) {
    api.cache.never()
  }

  const isTest = process.env.NODE_ENV === 'test'

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: isTest ? 'commonjs' : false,
          loose: options.loose ?? !isTest,
        },
      ],
      '@babel/preset-typescript',
      require('./babel.sfc.transform'),
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        'import',
        {
          libraryName: '@varlet/ui',
          libraryDirectory: 'es',
          style: true,
        },
        '@varlet/ui',
      ],
      [
        '@vue/babel-plugin-jsx',
        {
          enableObjectSlots: options.enableObjectSlots,
        },
      ],
    ],
  }
}

export default module.exports
