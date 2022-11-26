import { defineComponent, watch, Transition, Teleport, ref } from 'vue'
import VarOverlay from '../overlay'
import { props } from './props'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import { useRouteListener, useTeleport, createNamespace } from '../utils/components'

import '../styles/common.less'
import './popup.less'

const { n, classes } = createNamespace('popup')

export default defineComponent({
  name: 'VarPopup',
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const overlayVisible = ref(props.overlay)
    const { zIndex } = useZIndex(() => props.show, 3)
    const { disabled } = useTeleport()

    const hidePopup = () => {
      const { closeOnClickOverlay, onClickOverlay } = props
      onClickOverlay?.()

      if (!closeOnClickOverlay) {
        return
      }

      props['onUpdate:show']?.(false)
    }

    useLock(
      () => props.show,
      () => props.lockScroll
    )

    watch(
      () => props.show,
      (newValue: boolean) => {
        const { onOpen, onClose } = props
        overlayVisible.value = newValue
        newValue ? onOpen?.() : onClose?.()
      }
    )

    // internal for Dialog
    useRouteListener(() => props.onRouteChange?.())

    const renderContent = () => {
      return (
        <div
          class={classes(
            n('content'),
            n(`--${props.position}`),
            [props.defaultStyle, n('--content-background-color')],
            [props.defaultStyle, n('$-elevation--3')]
          )}
          style={{ zIndex: zIndex.value }}
          {...attrs}
        >
          {slots.default?.()}
        </div>
      )
    }

    const renderPopup = () => {
      const { onOpened, onClosed, show, transition, position, overlayClass = '', overlayStyle } = props

      return (
        <Transition name={n('$-fade')} onAfterEnter={onOpened} onAfterLeave={onClosed}>
          <div class={classes(n('$--box'), n())} style={{ zIndex: zIndex.value - 2 }} v-show={show}>
            <VarOverlay
              v-model={[overlayVisible.value, 'show']}
              overlayClass={overlayClass}
              overlayStyle={overlayStyle}
              onClickOverlay={hidePopup}
            />
            <Transition name={transition || n(`$-pop-${position}`)}>{show && renderContent()}</Transition>
          </div>
        </Transition>
      )
    }

    return () => {
      const { teleport } = props

      if (teleport) {
        return (
          <Teleport to={teleport} disabled={disabled.value}>
            {renderPopup()}
          </Teleport>
        )
      }

      return renderPopup()
    }
  },
})
