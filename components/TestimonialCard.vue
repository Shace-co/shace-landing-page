<template>
  <div :class="cardClasses">
    <div v-if="backgroundElements" class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" :style="backgroundStyle" />
    <div :class="quoteClasses" class="relative z-10 font-normal break-words">{{ quote }}</div>
    <div class="relative z-10 flex justify-start items-center gap-3">
      <img
        :src="avatar || '/placeholder.svg'"
        :alt="`${name} avatar`"
        :width="avatarSize"
        :height="avatarSize"
        :class="avatarClasses"
        style="border: 1px solid rgba(255, 255, 255, 0.08)"
      />
      <div class="flex flex-col justify-start items-start gap-0.5">
        <div :class="nameClasses">{{ name }}</div>
        <div :class="companyClasses">{{ company }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  quote: string
  name: string
  company: string
  avatar: string
  type: string
}

const props = defineProps<Props>()

const isLargeCard = computed(() => props.type.startsWith('large'))
const avatarSize = computed(() => isLargeCard.value ? 48 : 36)
const avatarClasses = computed(() => isLargeCard.value ? 'w-12 h-12 rounded-[41px]' : 'w-9 h-9 rounded-[30.75px]')
const padding = computed(() => isLargeCard.value ? 'p-6' : 'p-[30px]')
const cardHeight = computed(() => {
  if (props.type === 'large-teal' || props.type === 'large-light') return 'h-[502px]'
  return 'h-[244px]'
})

const cardClasses = computed(() => {
  let classes = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding.value} w-full md:w-[384px] ${cardHeight.value}`
  
  if (props.type === 'large-teal') {
    classes += ' bg-primary'
  } else if (props.type === 'large-light') {
    classes += ' bg-[rgba(231,236,235,0.12)]'
  } else {
    classes += ' bg-card outline outline-1 outline-border outline-offset-[-1px]'
  }
  
  return classes
})

const quoteClasses = computed(() => {
  if (props.type === 'large-teal') {
    return 'text-primary-foreground text-2xl font-medium leading-8'
  } else if (props.type === 'large-light') {
    return 'text-foreground text-2xl font-medium leading-8'
  }
  return 'text-foreground/80 text-[17px] font-normal leading-6'
})

const nameClasses = computed(() => {
  if (props.type === 'large-teal') {
    return 'text-primary-foreground text-base font-normal leading-6'
  } else if (props.type === 'large-light') {
    return 'text-foreground text-base font-normal leading-6'
  }
  return 'text-foreground text-sm font-normal leading-[22px]'
})

const companyClasses = computed(() => {
  if (props.type === 'large-teal') {
    return 'text-primary-foreground/60 text-base font-normal leading-6'
  } else if (props.type === 'large-light') {
    return 'text-muted-foreground text-base font-normal leading-6'
  }
  return 'text-muted-foreground text-sm font-normal leading-[22px]'
})

const backgroundElements = computed(() => props.type === 'large-teal' || props.type === 'large-light')
const backgroundStyle = computed(() => ({
  backgroundImage: "url('/images/large-card-background.svg')",
  zIndex: 0,
  opacity: props.type === 'large-light' ? 0.2 : 1,
}))
</script>

