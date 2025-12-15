<template>
  <div
    ref="sectionRef"
    :class="[className, { visible: isVisible }]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  delay?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
})

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (sectionRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              isVisible.value = true
            }, props.delay * 1000)
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, once: true }
    )
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
div {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
  transition: opacity 0.8s cubic-bezier(0.33, 1, 0.68, 1),
    transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
}

div.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>

