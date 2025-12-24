<template>
  <div class="max-w-md mx-auto">
    <div class="mb-8" :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'">
      <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">{{ $t('register.step1.title') }}</h1>
      <p class="text-lg text-gray-700">
        {{ $t('register.step1.subtitle') }} <strong class="text-primary">{{ $t('register.step1.subtitleBold') }}</strong>
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="space-y-2">
        <Label for="email" class="text-gray-700 font-medium">{{ $t('register.step1.emailLabel') }}</Label>
        <p class="text-sm text-gray-500">{{ $t('register.step1.emailHint') }}</p>
        <Input
          id="email"
          v-model="email"
          type="email"
          :placeholder="$t('register.step1.emailPlaceholder')"
          required
          :class="email && isValidEmail ? 'w-full transition-all focus:ring-2 focus:ring-primary ring-2 ring-green-500' : 'w-full transition-all focus:ring-2 focus:ring-primary'"
        />
        <p v-if="email && !isValidEmail" class="text-sm text-red-500 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ $t('register.step1.invalidEmail') }}
        </p>
      </div>

      <div class="flex items-start p-4 rounded-lg transition-colors" :class="[agreeTerms ? 'bg-primary/5' : 'bg-gray-50', $i18n.locale === 'ar' ? 'flex-row-reverse space-x-reverse space-x-3' : 'space-x-3']">
        <Checkbox v-model="agreeTerms" id="terms" class="mt-1 transition-all" />
        <Label for="terms" class="text-sm text-gray-700 cursor-pointer flex-1">
          {{ $t('register.step1.termsAgree') }} <NuxtLink :to="localePath('/terms-and-conditions')" class="text-primary hover:underline font-medium">{{ $t('register.step1.termsLink') }}</NuxtLink>
        </Label>
      </div>

      <Button
        type="submit"
        :disabled="!isFormValid"
        class="w-full bg-primary text-white hover:bg-primary/95 py-4 text-base font-medium uppercase tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        <span v-if="!isSubmitting">{{ $t('register.step1.button') }}</span>
        <span v-else class="flex items-center justify-center gap-2">
          <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ $t('register.step1.sending') }}
        </span>
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRegistration } from '~/composables/useRegistration'
import { useLocalePath } from '#imports'
import Input from '~/components/ui/Input.vue'
import Label from '~/components/ui/Label.vue'
import Checkbox from '~/components/ui/Checkbox.vue'
import Button from '~/components/ui/Button.vue'

const { updateData, nextStep } = useRegistration()
const localePath = useLocalePath()
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

