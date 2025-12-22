<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import FooterSection from '~/components/FooterSection.vue'
</script>

