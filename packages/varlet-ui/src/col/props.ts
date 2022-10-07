import type { PropType } from 'vue'
import { SizeDescriptor } from './provide'

export type ColDirection = 'row' | 'column'

export const props = {
  span: {
    type: [String, Number],
    default: 24,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  direction: {
    type: String as PropType<ColDirection>,
    default: 'row',
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
  xs: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
  sm: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
  md: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
  lg: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
  xl: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
}
