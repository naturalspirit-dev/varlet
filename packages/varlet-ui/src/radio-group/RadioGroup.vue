<template>
  <div :class="n('wrap')">
    <div :class="classes(n(), n(`--${direction}`))">
      <slot />
    </div>

    <var-form-details :error-message="errorMessage" />
  </div>
</template>

<script lang="ts">
import VarFormDetails from '../form-details'
import { computed, defineComponent, nextTick, watch, type ComputedRef } from 'vue'
import { props, type ValidateTriggers } from './props'
import { useValidation, createNamespace, call } from '../utils/components'
import { useRadios, type RadioGroupProvider } from './provide'
import { useForm } from '../form/provide'

const { n, classes } = createNamespace('radio-group')
export default defineComponent({
  name: 'VarRadioGroup',
  components: { VarFormDetails },
  props,
  setup(props) {
    const { length, radios, bindRadios } = useRadios()
    const { bindForm } = useForm()
    const {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation,
    } = useValidation()
    const radioGroupErrorMessage: ComputedRef<string> = computed(() => errorMessage.value)

    const validateWithTrigger = (trigger: ValidateTriggers) => {
      nextTick(() => {
        const { validateTrigger, rules, modelValue } = props
        vt(validateTrigger, trigger, rules, modelValue)
      })
    }

    const syncRadios = () => radios.forEach(({ sync }) => sync(props.modelValue))

    const onToggle = (changedValue: any) => {
      call(props['onUpdate:modelValue'], changedValue)
      call(props.onChange, changedValue)
      validateWithTrigger('onChange')
    }

    // expose
    const validate = () => v(props.rules, props.modelValue)

    // expose
    const reset = () => {
      call(props['onUpdate:modelValue'], undefined)
      resetValidation()
    }

    watch(() => props.modelValue, syncRadios)

    watch(() => length.value, syncRadios)

    const radioGroupProvider: RadioGroupProvider = {
      onToggle,
      validate,
      reset,
      resetValidation,
      errorMessage: radioGroupErrorMessage,
    }

    call(bindForm, radioGroupProvider)
    bindRadios(radioGroupProvider)

    return {
      errorMessage,
      n,
      classes,
      reset,
      validate,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../form-details/formDetails';
@import './radioGroup';
</style>
