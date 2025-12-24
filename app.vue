<template>
  <div :dir="dir" :lang="locale">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { locale } = useI18n()
const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
    dir: computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
  }
})
</script>

<style>
/* Smooth scrolling - only on html to avoid conflicts */
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
}

/* Improve focus visibility for accessibility */
*:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}

/* Better selection color */
::selection {
  background-color: hsl(var(--primary) / 0.2);
  color: hsl(var(--foreground));
}

/* Optimize scrolling performance */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
