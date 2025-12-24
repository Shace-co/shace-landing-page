<template>
  <div class="max-w-md mx-auto text-left">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-6 animate-fade-in">{{ $t('register.step2.title') }}</h1>
    
    <p class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
      {{ $t('register.step2.sentTo') }}
    </p>
    <p class="text-xl md:text-2xl font-bold mb-8">
      {{ $t('register.step2.to') }} <span class="text-blue-600 font-mono">{{ registrationData.email }}</span>
    </p>

    <p class="text-gray-600 mb-8 leading-relaxed">
      {{ $t('register.step2.instruction') }}
    </p>

    <div class="p-4 bg-blue-50 rounded-lg mb-6">
      <p class="text-sm text-blue-800">
        <strong>{{ $t('register.step2.tip') }}</strong> {{ $t('register.step2.tipText') }}
      </p>
    </div>

    <div class="text-gray-900">
      {{ $t('register.step2.noEmail') }} 
      <button 
        @click="handleResend" 
        :disabled="isResending"
        class="text-primary hover:underline font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="!isResending">{{ $t('register.step2.resend') }}</span>
        <span v-else class="flex items-center gap-2">
          <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ $t('register.step2.resending') }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRegistration } from '~/composables/useRegistration'

const { registrationData } = useRegistration()
const isResending = ref(false)

const handleResend = async () => {
  isResending.value = true
  // TODO: Implement resend email functionality
  await new Promise(resolve => setTimeout(resolve, 1500))
  console.log('Resending email to:', registrationData.value.email)
  isResending.value = false
  
  // Show success message (you could add a toast notification here)
  alert('Email resent successfully!')
}
</script>

