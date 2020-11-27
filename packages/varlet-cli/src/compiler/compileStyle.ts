import { mkdirSync, pathExistsSync, readFileSync, writeFileSync } from 'fs-extra'
import { render } from 'less'
import { parse, resolve } from 'path'
import { replaceExt } from '../shared/fsUtils'

export const IMPORT_LESS_PATH_RE = /((?<!['"`])import\s+['"]\s*\.{1,2}\/.+\.)less(\s*['"`])(?!\s*['"`])/g
export const REQUIRE_LESS_PATH_RE = /(?<!['"`]\s*)(require\s*\(\s*['"]\.{1,2}\/.+\.)less(\s*['"`]\))(?!\s*['"`])/g
export const EMPTY_SPACE_RE = /[\s]+/g
export const EMPTY_LINE_RE = /[\n\r]*/g

export function replaceStyleExt(script: string) {
  const replacer = (_: any, p1: string, p2: string): string => {
    return `${p1}css${p2}`
  }
  return script
    .replace(IMPORT_LESS_PATH_RE, replacer)
    .replace(REQUIRE_LESS_PATH_RE, replacer)
}

export function clearEmptyLine(style: string) {
  return style
    .replace(EMPTY_LINE_RE, '')
    .replace(EMPTY_SPACE_RE, ' ')
}

export async function compileLess(path: string) {
  const source = readFileSync(path, 'utf-8')
  const { css } = await render(source, { filename: path })
  writeFileSync(replaceExt(path, '.css'), clearEmptyLine(css), 'utf-8')
}

export function buildStyleEntry(dir: string) {
  const styleDir: string = resolve(dir, './style')
  const styleIndex: string = resolve(dir, './style/index.js')

  !pathExistsSync(styleDir) && mkdirSync(styleDir)
  !pathExistsSync(styleIndex) && writeFileSync(styleIndex, '', 'utf-8')
}

export function emitStyleEntry(path: string, modules: string | boolean = false) {
  const { ext, dir, base } = parse(path)
  const styleDir: string = resolve(dir, './style')
  const styleIndex: string = resolve(dir, './style/index.js')
  const styleLess: string = resolve(dir, './style/less.js')

  !pathExistsSync(styleDir) && mkdirSync(styleDir)
  !pathExistsSync(styleIndex) && writeFileSync(styleIndex, '', 'utf-8')
  !pathExistsSync(styleLess) && writeFileSync(styleLess, '', 'utf-8')

  const emitPath = ext === '.css' ? styleIndex : styleLess
  const emitScript = modules === 'cjs' ? `require('../${base}')\n` : `import '../${base}'\n`
  const currentScript = readFileSync(emitPath, 'utf-8')
  writeFileSync(emitPath, `${currentScript}${emitScript}`)
}

