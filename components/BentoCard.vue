<template>
  <div class="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    <div
      class="absolute inset-0 rounded-2xl"
      style="background: rgba(231, 236, 235, 0.08); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);"
    />
    <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
    <div class="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div class="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p class="self-stretch text-foreground text-lg font-normal leading-7">
          {{ title }} <br />
          <span class="text-muted-foreground">{{ description }}</span>
        </p>
      </div>
    </div>
    <div class="self-stretch h-72 relative -mt-0.5 z-10">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image?: string
}

defineProps<Props>()
</script>

