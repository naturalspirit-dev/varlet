module.exports = {
  name: 'Varlet',
  namespace: 'var',
  host: 'localhost',
  port: 8080,
  title: 'VARLET',
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
      'zh-CN': 'Varlet 面向Vue3的Material风格移动端组件库',
      'en-US': 'Material design mobile components built for Vue3',
    },
    header: {
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
      github: 'https://github.com/haoziqaq/varlet',
      darkMode: true,
    },
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': 'Varlet 面向Vue3的Material风格移动端组件库',
      'en-US': 'Material design mobile components built for Vue3',
    },
    header: {
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
      github: 'https://github.com/haoziqaq/varlet',
      darkMode: true,
    },
  },
  themes: {
    'color-body': '#fff',
    'color-bar': '#fff',
    'color-text': '#555',
    'color-border': 'rgba(0, 0, 0, 0.12)',
    'color-shadow': '#eee',
    'color-primary': '#1d92e9',
    'color-link': '#00c48f',
    'color-type': '#00c48f',
    'color-progress': '#1d92e9',
    'color-progress-track': '#fff',
    'color-side-bar': '#3a7afe',
    'color-side-bar-active-background': '#3a7afe1a',
    'color-app-bar': '#3a7afe',
    'color-mobile-cell-hover': '#3a7afe',
    'color-pc-language-active': '#3a7afe',
    'color-pc-language-active-background': '#edf5ff',
    'color-mobile-language-active': '#3a7afe',
    'color-mobile-language-active-background': '#edf5ff',
  },
  darkThemes: {
    'color-body': '#121212',
    'color-bar': '#202020',
    'color-text': '#fff',
    'color-border': '#555',
    'color-shadow': '#202020',
    'color-primary': '#1d92e9',
    'color-link': '#00c48f',
    'color-type': '#00c48f',
    'color-progress': '#1d92e9',
    'color-progress-track': '#202020',
    'color-side-bar': '#3a7afe',
    'color-side-bar-active-background': '#3a7afe1a',
    'color-app-bar': '#3a7afe',
    'color-mobile-cell-hover': '#3a7afe',
    'color-pc-language-active': '#3a7afe',
    'color-pc-language-active-background': '#edf5ff',
    'color-mobile-language-active': '#3a7afe',
    'color-mobile-language-active-background': '#edf5ff',
  },
}
