<template>
  <section class="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
    <div class="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
      <div class="hidden md:block w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
      <div class="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
        <div class="flex flex-col justify-start items-center gap-4">
          <h2 class="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
            {{ $t('bento.title') }}
          </h2>
          <p class="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
            {{ $t('bento.subtitle') }}
          </p>
        </div>
      </div>
      <div class="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        <BentoCard
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :description="card.description"
          :image="card.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '#imports'
import BentoCard from '~/components/BentoCard.vue'

const { t } = useI18n()
const { getImagePath } = useLogoPath()

const cards = computed(() => [
  {
    title: t('bento.cards.officeMapping.title'),
    description: t('bento.cards.officeMapping.description'),
    image: getImagePath("/images/ai-code-reviews.png"),
  },
  {
    title: t('bento.cards.insights.title'),
    description: t('bento.cards.insights.description'),
    image: getImagePath("/images/realtime-coding-previews.png"),
  },
  {
    title: t('bento.cards.multiBranch.title'),
    description: t('bento.cards.multiBranch.description'),
    image: getImagePath("/images/mcp-connectivity.png"),
  },
  {
    title: t('bento.cards.tenantCRM.title'),
    description: t('bento.cards.tenantCRM.description'),
    image: getImagePath("/images/parallel-coding-agents.png"),
  },
  {
    title: t('bento.cards.payments.title'),
    description: t('bento.cards.payments.description'),
    image: getImagePath("/images/deployment-easy.png"),
  },
  {
    title: t('bento.cards.whatsapp.title'),
    description: t('bento.cards.whatsapp.description'),
    image: getImagePath("/images/one-click-integrations.png"),
  },
])
</script>

