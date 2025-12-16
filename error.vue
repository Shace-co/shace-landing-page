<template>
  <div class="min-h-screen bg-background flex items-center justify-center px-6">
    <div class="max-w-2xl mx-auto text-center">
      <h1 class="text-6xl font-bold mb-4">{{ error.statusCode || 'Error' }}</h1>
      <h2 class="text-2xl font-semibold mb-4">{{ error.statusMessage || 'Something went wrong' }}</h2>
      <p class="text-muted-foreground mb-8">
        {{ error.message || 'We couldn\'t find the page you\'re looking for.' }}
      </p>
      <div class="flex gap-4 justify-center">
        <NuxtLink
          to="/"
          class="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Go Home
        </NuxtLink>
        <button
          @click="handleError"
          class="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

