<template>
  <header :class="headerClasses">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
            :src="currentLogoPath"
            :alt="$t('header.logoAlt')"
            width="163"
            height="44"
            :class="logoClasses"
          />
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-2">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click.prevent="handleScroll(item.href)"
            :class="navLinkClasses"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <LanguageSwitcher />
        <NuxtLink
          to="/sign-in"
          :class="navLinkClasses"
        >
          {{ t('header.signIn') }}
        </NuxtLink>
        <NuxtLink
          to="/#pricing-section"
          class="hidden md:block"
        >
          <Button :class="buttonClasses">
            {{ t('header.tryForFree') }}
          </Button>
        </NuxtLink>
        <Sheet v-model="isSheetOpen" side="bottom" :class="sheetClasses">
          <template #trigger>
            <Button
              variant="ghost"
              size="icon"
              :class="menuButtonClasses"
            >
              <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span class="sr-only">{{ t('header.toggleNav') }}</span>
            </Button>
          </template>
          <div class="flex flex-col space-y-2 text-center sm:text-left">
            <div class="flex items-center justify-start">
              <img
                :src="currentLogoPath"
                :alt="$t('header.logoAlt')"
                width="163"
                height="44"
                :class="logoClasses"
              />
            </div>
          </div>
          <nav class="flex flex-col gap-4 mt-6">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              @click.prevent="handleScroll(item.href); isSheetOpen = false"
              :class="mobileNavLinkClasses"
            >
              {{ item.name }}
            </a>
            <NuxtLink
              to="/sign-in"
              :class="mobileNavLinkClasses"
              @click="isSheetOpen = false"
            >
              {{ t('header.signIn') }}
            </NuxtLink>
            <NuxtLink
              to="/#pricing-section"
              class="w-full mt-4"
              @click="isSheetOpen = false"
            >
              <Button :class="buttonClasses">
                {{ t('header.tryForFree') }}
              </Button>
            </NuxtLink>
          </nav>
        </Sheet>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '#imports'
import { useLogoPath } from '~/composables/useLogoPath'
import Button from '~/components/ui/Button.vue'
import Sheet from '~/components/ui/Sheet.vue'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

const route = useRoute()
const { t } = useI18n()
const { getLogoPath } = useLogoPath()
const logoPath = getLogoPath('shace-logo-white.svg')
const darkLogoPath = getLogoPath('shace-logo-color.png')

// Determine which logo to use and whether to apply filter
const currentLogoPath = computed(() => {
  return isDarkPage.value ? darkLogoPath : logoPath
})

const logoClasses = computed(() => {
  const baseClasses = 'h-8 w-auto'
  // If on dark page and using white logo (color logo doesn't exist), apply filter to make it dark
  if (isDarkPage.value && darkLogoPath === logoPath) {
    return `${baseClasses} brightness-0 invert`
  }
  return baseClasses
})

// Check if we're on a policy page (only these should have dark header)
const isDarkPage = computed(() => {
  const policyPages = ['privacy-policy', 'terms-and-conditions', 'cancellation-policy']
  const currentPath = route.path.toLowerCase()
  return policyPages.some(page => currentPath.includes(page))
})

const headerClasses = computed(() => {
  if (isDarkPage.value) {
    return 'w-full py-4 px-4 md:px-6 bg-white shadow-sm sticky top-0 z-[100] relative'
  }
  return 'w-full py-4 px-4 md:px-6 bg-transparent backdrop-blur-sm sticky top-0 z-[100] relative'
})

const navLinkClasses = computed(() => {
  if (isDarkPage.value) {
    return 'hidden md:block text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:bg-gray-100'
  }
  return 'text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-all duration-200 hover:bg-white/5'
})

const mobileNavLinkClasses = computed(() => {
  if (isDarkPage.value) {
    return 'text-gray-700 hover:text-gray-900 justify-start text-lg py-2'
  }
  return 'text-[#888888] hover:text-foreground justify-start text-lg py-2'
})

const buttonClasses = computed(() => {
  if (isDarkPage.value) {
    return 'bg-primary text-white hover:bg-primary/95 px-6 py-2 rounded-full font-medium shadow-sm transition-all duration-200'
  }
  return 'bg-secondary text-secondary-foreground hover:bg-secondary/95 px-6 py-2 rounded-full font-medium shadow-sm transition-all duration-200'
})

const menuButtonClasses = computed(() => {
  if (isDarkPage.value) {
    return 'text-gray-700 md:hidden'
  }
  return 'text-foreground md:hidden'
})

const sheetClasses = computed(() => {
  if (isDarkPage.value) {
    return 'bg-white border-t border-gray-200 text-gray-900'
  }
  return 'bg-background border-t border-border text-foreground'
})

const navItems = computed(() => [
  { name: t('header.features'), href: '#features-section' },
  { name: t('header.pricing'), href: '#pricing-section' },
  { name: t('header.testimonials'), href: '#testimonials-section' },
])

const isSheetOpen = ref(false)

const handleScroll = (href: string) => {
  const targetId = href.substring(1)
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    // Calculate offset for sticky header
    const headerHeight = 80
    const elementPosition = targetElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

