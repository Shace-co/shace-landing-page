<template>
  <div>
    <Header />
    <slot />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import FooterSection from '~/components/FooterSection.vue'
</script>

