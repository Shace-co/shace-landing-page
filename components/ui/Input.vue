<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :required="required"
    :class="inputClasses"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '~/composables/useCn'

interface Props {
  type?: string
  placeholder?: string
  modelValue?: string | number
  required?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
})

defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const inputClasses = computed(() => {
  return cn(
    'flex h-10 w-full rounded-md border border-gray-300 bg-white text-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100 transition-all duration-200 hover:border-primary/50 focus:border-primary',
    props.class
  )
})
</script>

