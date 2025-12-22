<template>
  <input
    type="checkbox"
    :checked="modelValue"
    :class="checkboxClasses"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '~/composables/useCn'

interface Props {
  modelValue?: boolean
  class?: string
}

const props = defineProps<Props>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const checkboxClasses = computed(() => {
  return cn(
    'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
    props.class
  )
})
</script>

