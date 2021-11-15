import button from './button'
import cell from './cell'
import card from './card'
import timePicker from './timePicker'
import datePicker from './datePicker'
import skeleton from './skeleton'
import tab from './tab'
import tabItem from './tab-item'
import popup from './popup'
import dialog from './dialog'
import actionSheet from './actionSheet'
import chip from './chip'
import badge from './badge'
import uploader from './uploader'
import collapse from './collapse'
import pullRefresh from './pullRefresh'
import switchThemes from './switch'
import steps from './steps'
import pagination from './pagination'
import table from './table'
import divider from './divider'
import { StyleVars } from '../../style-provider'

export default {
  // common
  '--color-body': '#1e1e1e',
  '--color-text': '#fff',
  '--color-primary': '#4a7afe',
  '--color-info': '#10afef',
  '--color-success': '#10c48f',
  '--color-warning': '#ff8800',
  '--color-danger': '#ef5350',
  '--color-disabled': '#393939',
  '--color-text-disabled': '#757575',
  ...button,
  ...cell,
  ...card,
  ...timePicker,
  ...datePicker,
  ...skeleton,
  ...tab,
  ...tabItem,
  ...popup,
  ...dialog,
  ...actionSheet,
  ...chip,
  ...badge,
  ...uploader,
  ...collapse,
  ...pullRefresh,
  ...switchThemes,
  ...steps,
  ...pagination,
  ...table,
  ...divider,
} as StyleVars
