module.exports = {
  name: 'Varlet',
  namespace: 'var',
  host: 'localhost',
  port: 8080,
  title: 'VARLET',
  themesKey: 'VARLET_THEMES',
  logo: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
  defaultLanguage: 'zh-CN',
  highlight: {
    /**
     * @see https://highlightjs.org/
     */
    style: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css',
  },
  analysis: {
    baidu: '',
  },
  useMobile: false,
  pc: {
    menu: [],
    redirect: '/home',
    title: {
      'zh-CN': '面向 Vue3 的 Material 风格移动端组件库',
      'en-US': 'Material design mobile components built for Vue3',
    },
    header: {
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
      github: 'https://github.com/varletjs/varlet',
      playground: 'https://varlet.gitee.io/varlet-ui-playground',
      darkMode: true,
    },
    clipboard: {
      'zh-CN': '代码已复制到剪切板',
      'en-US': 'The code has been copied to the clipboard',
    },
    fold: {
      defaultFold: false,
      foldHeight: 50,
    },
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': '面向 Vue3 的 Material 风格移动端组件库',
      'en-US': 'Material design mobile components built for Vue3',
    },
    header: {
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
      github: 'https://github.com/varletjs/varlet',
      darkMode: true,
    },
  },
  themes: {
    'color-body': '#fff',
    'color-bar': '#fff',
    'color-sub-bar': '#f5f5f5',
    'color-text': '#555',
    'color-sub-text': '#888',
    'color-border': 'rgba(0, 0, 0, 0.12)',
    'color-shadow': '#eee',
    'color-introduce-border': '#2196f3',
    'color-primary': '#2196f3',
    'color-link': '#00c48f',
    'color-type': '#00c48f',
    'color-progress': '#1d92e9',
    'color-progress-track': '#fff',
    'color-side-bar': '#3a7afe',
    'color-side-bar-active-background': '#3a7afe1a',
    'color-app-bar': '#3a7afe',
    'color-nav-button-hover-background': 'rgba(0, 0, 0, 0.08)',
    'color-mobile-cell-hover': '#3a7afe',
    'color-pc-language-active': '#3a7afe',
    'color-pc-language-active-background': '#edf5ff',
    'color-mobile-language-active': '#3a7afe',
    'color-mobile-language-active-background': '#edf5ff',
    'color-hl-background': '#f9f9f9',
    'color-hl-code': '#58727e',
    'color-hl-group-a': '#7c7c7c',
    'color-hl-group-b': '#2196f3',
    'color-hl-group-c': '#ff9422',
    'color-hl-group-d': '#58c193',
    'color-hl-group-e': '#ff9422',
    'color-hl-group-f': '#ff9422',
    'color-hl-group-g': '#ff9422',
    'color-hl-group-h': '#06a6e9',
    'color-hl-group-i': '#f23733',
  },
  darkThemes: {
    'color-body': '#121212',
    'color-bar': '#1e1e1e',
    'color-sub-bar': '#272727',
    'color-text': '#fff',
    'color-sub-text': '#aaa',
    'color-border': '#333',
    'color-shadow': '#121212',
    'color-introduce-border': '#555',
    'color-primary': '#5580f8',
    'color-link': '#10c48f',
    'color-type': '#10c48f',
    'color-progress': '#5580f8',
    'color-progress-track': '#202020',
    'color-side-bar': '#4a7afe',
    'color-side-bar-active-background': '#4a7afe1a',
    'color-app-bar': '#272727',
    'color-nav-button-hover-background': 'rgba(255, 255, 255, 0.08)',
    'color-mobile-cell-hover': '#4a7afe',
    'color-pc-language-active': '#4a7afe',
    'color-pc-language-active-background': '#4a7afe20',
    'color-mobile-language-active': '#4a7afe',
    'color-mobile-language-active-background': '#4a7afe20',
    'color-hl-background': '#272727',
    'color-hl-code': '#fff',
    'color-hl-group-a': '#7c7c7c',
    'color-hl-group-b': '#96cbfe',
    'color-hl-group-c': '#ff7b1e',
    'color-hl-group-d': '#A8FFC4',
    'color-hl-group-e': '#ff7b1e',
    'color-hl-group-f': '#ff7b1e',
    'color-hl-group-g': '#ff7b1e',
    'color-hl-group-h': '#14a6e9',
    'color-hl-group-i': '#ed4648',
  },
}
