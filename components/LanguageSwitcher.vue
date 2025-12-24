<template>
  <button
    @click="switchLanguage"
    :class="buttonClasses"
    class="bg-transparent border border-current rounded-full px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:bg-white/5"
  >
    {{ otherLocaleName }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n, useSwitchLocalePath } from '#imports'
import { useRoute } from 'vue-router'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

// Get the other locale (the one that's not currently active)
const otherLocale = computed(() => {
  return locales.value.find((l: { code: string }) => l.code !== locale.value) || locales.value[0]
})

const otherLocaleName = computed(() => {
  return otherLocale.value?.name || 'English'
})

const isDarkPage = computed(() => {
  const policyPages = ['privacy-policy', 'terms-and-conditions', 'cancellation-policy']
  const currentPath = route.path.toLowerCase()
  return policyPages.some(page => currentPath.includes(page))
})

const buttonClasses = computed(() => {
  if (isDarkPage.value) {
    return 'text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
  }
  return 'text-[#888888] border-[#888888]/30 hover:border-[#888888]/50'
})

const switchLanguage = async () => {
  if (otherLocale.value) {
    await navigateTo(switchLocalePath(otherLocale.value.code))
  }
}
</script>

