<template>
  <section class="w-full pt-20 md:pt-60 lg:pt-60 pb-10 md:pb-20 px-5 relative flex flex-col justify-center items-center overflow-visible">
    <div class="relative z-10 flex flex-col justify-start items-center gap-9 max-w-5xl lg:max-w-6xl mx-auto">
      <div class="flex flex-col justify-start items-center gap-4 text-center">
        <h2 class="text-foreground text-4xl md:text-5xl lg:text-[68px] font-semibold leading-tight md:leading-tight lg:leading-[76px] break-words max-w-3xl md:max-w-4xl lg:max-w-5xl">
          {{ $t('cta.title') }}
        </h2>
        <p class="text-muted-foreground text-sm md:text-base font-medium leading-[18.20px] md:leading-relaxed break-words max-w-3xl md:max-w-4xl lg:max-w-5xl">
          {{ $t('cta.description') }}
        </p>
      </div>
      <NuxtLink :to="localePath('/register')">
        <Button
          class="px-[30px] py-2 bg-secondary text-secondary-foreground text-base font-medium leading-6 rounded-[99px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.13)] hover:bg-secondary/95 transition-all duration-200"
          size="lg"
        >
          {{ $t('cta.button') }}
        </Button>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
</script>

