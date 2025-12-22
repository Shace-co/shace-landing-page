<template>
  <label :for="forId" :class="labelClasses">
    <slot />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '~/composables/useCn'

interface Props {
  forId?: string
  class?: string
}

const props = defineProps<Props>()

const labelClasses = computed(() => {
  return cn(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    props.class
  )
})
</script>

