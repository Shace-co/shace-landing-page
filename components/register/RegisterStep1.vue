<template>
  <div class="max-w-md mx-auto">
    <div class="text-left mb-8">
      <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">Get Started with Shace</h1>
      <p class="text-lg text-gray-700">
        Start your journey <strong class="text-primary">toward seamless workspace management.</strong>
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="space-y-2">
        <Label for="email" class="text-gray-700 font-medium">Business Email*</Label>
        <p class="text-sm text-gray-500">This will be used as your account login email.</p>
        <Input
          id="email"
          v-model="email"
          type="email"
          placeholder="info@shace.co"
          required
          :class="email && isValidEmail ? 'w-full transition-all focus:ring-2 focus:ring-primary ring-2 ring-green-500' : 'w-full transition-all focus:ring-2 focus:ring-primary'"
        />
        <p v-if="email && !isValidEmail" class="text-sm text-red-500 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Please enter a valid email address
        </p>
      </div>

      <div class="flex items-start space-x-3 p-4 rounded-lg transition-colors" :class="agreeTerms ? 'bg-primary/5' : 'bg-gray-50'">
        <Checkbox v-model="agreeTerms" id="terms" class="mt-1 transition-all" />
        <Label for="terms" class="text-sm text-gray-700 cursor-pointer flex-1">
          I agree with the <NuxtLink to="/terms-and-conditions" class="text-primary hover:underline font-medium">terms and conditions.</NuxtLink>
        </Label>
      </div>

      <Button
        type="submit"
        :disabled="!isFormValid"
        class="w-full bg-primary text-white hover:bg-primary/95 py-4 text-base font-medium uppercase tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        <span v-if="!isSubmitting">SEND LOGIN LINK</span>
        <span v-else class="flex items-center justify-center gap-2">
          <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRegistration } from '~/composables/useRegistration'
import Input from '~/components/ui/Input.vue'
import Label from '~/components/ui/Label.vue'
import Checkbox from '~/components/ui/Checkbox.vue'
import Button from '~/components/ui/Button.vue'

const { updateData, nextStep } = useRegistration()
const email = ref('')
const agreeTerms = ref(false)
const isSubmitting = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidEmail = computed(() => emailRegex.test(email.value))
const isFormValid = computed(() => isValidEmail.value && agreeTerms.value)

const handleSubmit = async () => {
  if (!isFormValid.value) return
  
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  updateData({ email: email.value })
  isSubmitting.value = false
  nextStep()
}
</script>

