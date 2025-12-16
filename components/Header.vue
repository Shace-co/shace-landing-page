<template>
  <header class="w-full py-4 px-6">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
            :src="logoPath"
            alt="Shace Logo"
            width="163"
            height="44"
            class="h-8 w-auto"
          />
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-2">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click.prevent="handleScroll(item.href)"
            class="text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/#pricing-section"
          class="hidden md:block"
        >
          <Button class="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-medium shadow-sm">
            Try for Free
          </Button>
        </NuxtLink>
        <Sheet v-model="isSheetOpen" side="bottom" class="bg-background border-t border-border text-foreground">
          <template #trigger>
            <Button
              variant="ghost"
              size="icon"
              class="text-foreground md:hidden"
            >
              <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </template>
          <div class="flex flex-col space-y-2 text-center sm:text-left">
            <div class="flex items-center justify-start">
              <img
                :src="logoPath"
                alt="Shace Logo"
                width="163"
                height="44"
                class="h-8 w-auto"
              />
            </div>
          </div>
          <nav class="flex flex-col gap-4 mt-6">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              @click.prevent="handleScroll(item.href); isSheetOpen = false"
              class="text-[#888888] hover:text-foreground justify-start text-lg py-2"
            >
              {{ item.name }}
            </a>
            <NuxtLink
              to="/#pricing-section"
              class="w-full mt-4"
              @click="isSheetOpen = false"
            >
              <Button class="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-medium shadow-sm">
                Try for Free
              </Button>
            </NuxtLink>
          </nav>
        </Sheet>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/ui/Button.vue'
import Sheet from '~/components/ui/Sheet.vue'

const { getLogoPath } = useLogoPath()
const logoPath = getLogoPath('shace-logo-white.svg')

const navItems = [
  { name: 'Features', href: '#features-section' },
  { name: 'Pricing', href: '#pricing-section' },
  { name: 'Testimonials', href: '#testimonials-section' },
]

const isSheetOpen = ref(false)

const handleScroll = (href: string) => {
  const targetId = href.substring(1)
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

