<template>
  <div>
    <div @click="isOpen = true">
      <slot name="trigger" />
    </div>
    <Teleport to="body">
      <Transition name="overlay">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 bg-black/80"
          @click="close"
        />
      </Transition>
      <Transition :name="`slide-${side}`">
        <div
          v-if="isOpen"
          :class="sheetClasses"
          class="fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out"
        >
          <slot />
          <button
            v-if="showClose"
            class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            @click="close"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="sr-only">Close</span>
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '~/composables/useCn'

interface Props {
  side?: 'top' | 'bottom' | 'left' | 'right'
  modelValue?: boolean
  showClose?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'right',
  modelValue: false,
  showClose: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const close = () => {
  isOpen.value = false
}

const sideClasses = {
  top: 'inset-x-0 top-0 border-b',
  bottom: 'inset-x-0 bottom-0 border-t',
  left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
  right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
}

const sheetClasses = computed(() => {
  return cn(sideClasses[props.side], props.class)
})
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: transform 0.5s;
}

.slide-bottom-enter-from {
  transform: translateY(100%);
}

.slide-bottom-leave-to {
  transform: translateY(100%);
}
</style>

