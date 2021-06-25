import type { App } from 'vue'
import { VarComponent } from './varComponent'

export interface ImagePreviewProps {
  show?: boolean
  current?: string
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  teleport?: string
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (index: number) => void
  'onUpdate:show': (show: boolean) => void
}

export interface ImagePreviewOptions {
  show?: boolean
  current?: string
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (index: number) => void
}

export class ImagePreviewComponent extends VarComponent {
  $props: ImagePreviewProps
}

export interface IImagePreview {
  (options: string | string[] | ImagePreviewOptions): void
  Component: typeof ImagePreviewComponent

  close(): void

  install(app: App): void
}

export const ImagePreview: IImagePreview
