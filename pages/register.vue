<template>
  <div class="min-h-screen flex" :class="{ 'flex-row-reverse': dir === 'rtl' }" :dir="dir">
    <!-- Left Side - Branding & Marketing -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);"></div>
      </div>
      
      <!-- Logo -->
      <div class="relative z-10">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 mb-8">
          <img
            :src="logoPath"
            :alt="$t('header.logoAlt')"
            width="163"
            height="44"
            class="h-8 w-auto"
          />
        </NuxtLink>
      </div>

      <!-- Marketing Content -->
      <div class="relative z-10 flex-1 flex flex-col justify-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {{ $t('register.title') }}
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          {{ $t('register.description') }}
        </p>
        
        <!-- Progress Indicator for Desktop -->
        <div class="mt-12">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-medium text-white/80">{{ $t('register.progress') }}</span>
            <span class="text-lg font-bold">{{ Math.round((currentStep / totalSteps) * 100) }}%</span>
          </div>
          <div class="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              class="h-full bg-white rounded-full transition-all duration-500 ease-out"
              :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
            />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="relative z-10 flex items-center justify-between text-sm text-white/70">
        <span>{{ $t('signIn.copyright') }} {{ new Date().getFullYear() }} Shace Enterprises LTD.</span>
        <NuxtLink :to="localePath('/privacy-policy')" class="hover:text-white transition-colors">{{ $t('signIn.privacyPolicy') }}</NuxtLink>
      </div>
    </div>

    <!-- Right Side - Registration Form -->
    <div class="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 md:p-8 lg:p-12 overflow-y-auto">
      <div class="w-full max-w-lg" :class="{ 'text-right': dir === 'rtl', 'text-left': dir === 'ltr' }">
        <!-- Mobile Logo -->
        <div class="lg:hidden mb-8">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
            <img
              :src="logoPath"
              alt="Shace Logo"
              width="163"
              height="44"
              class="h-8 w-auto"
            />
          </NuxtLink>
        </div>

        <!-- Mobile Progress -->
        <div class="lg:hidden mb-8">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-medium text-gray-600">{{ $t('register.mobileProgress') }}</span>
            <span class="text-sm font-semibold text-primary">{{ Math.round((currentStep / totalSteps) * 100) }}%</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500 ease-out"
              :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
            />
          </div>
        </div>

        <!-- Step Indicator (Mobile) -->
        <div class="lg:hidden mb-8">
          <div class="flex items-center justify-between overflow-x-auto pb-2">
            <div
              v-for="step in totalSteps"
              :key="step"
              class="flex items-center flex-shrink-0"
            >
              <div
                :class="[
                  'flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all',
                  step < currentStep
                    ? 'bg-primary text-white'
                    : step === currentStep
                    ? 'bg-primary text-white ring-2 ring-primary ring-offset-2'
                    : 'bg-gray-200 text-gray-600',
                ]"
              >
                <span v-if="step < currentStep">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span v-else>{{ step }}</span>
              </div>
              <div
                v-if="step < totalSteps"
                :class="[
                  'h-1 w-2 mx-1 transition-all rounded-full',
                  step < currentStep ? 'bg-primary' : 'bg-gray-200',
                ]"
              />
            </div>
          </div>
        </div>

        <!-- Step Content with Transition -->
        <Transition
          name="step"
          mode="out-in"
        >
          <div :key="currentStep" class="step-content">
            <component :is="currentStepComponent" v-bind="stepProps" />
          </div>
        </Transition>

        <!-- Navigation Buttons -->
        <div class="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
          <Button
            v-if="currentStep > 1"
            type="button"
            variant="outline"
            @click="previousStep()"
            class="px-6 transition-all border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 flex items-center"
            :class="dir === 'rtl' ? 'flex-row-reverse' : ''"
          >
            <svg class="w-4 h-4" :class="dir === 'rtl' ? 'ml-2' : 'mr-2'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="dir === 'rtl' ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'" />
            </svg>
            {{ $t('register.back') }}
          </Button>
          <div v-else></div>
          
          <Button
            v-if="currentStep < totalSteps"
            type="button"
            @click="nextStep()"
            class="bg-primary text-white hover:bg-primary/95 px-8 transition-all shadow-lg hover:shadow-xl flex items-center"
            :class="dir === 'rtl' ? 'flex-row-reverse' : ''"
          >
            {{ $t('register.next') }}
            <svg class="w-4 h-4" :class="dir === 'rtl' ? 'mr-2' : 'ml-2'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="dir === 'rtl' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'" />
            </svg>
          </Button>
          <div v-else></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '#imports'
import { useRegistration } from '~/composables/useRegistration'
import { useLogoPath } from '~/composables/useLogoPath'
import { useLocalePath } from '#imports'
import Button from '~/components/ui/Button.vue'
import RegisterStep1 from '~/components/register/RegisterStep1.vue'
import RegisterStep2 from '~/components/register/RegisterStep2.vue'
import RegisterStep3 from '~/components/register/RegisterStep3.vue'
import RegisterStep4 from '~/components/register/RegisterStep4.vue'
import RegisterStep5 from '~/components/register/RegisterStep5.vue'
import RegisterStep6 from '~/components/register/RegisterStep6.vue'
import RegisterStep7 from '~/components/register/RegisterStep7.vue'
import RegisterStep8 from '~/components/register/RegisterStep8.vue'
import RegisterStep9 from '~/components/register/RegisterStep9.vue'
import RegisterStep10 from '~/components/register/RegisterStep10.vue'

definePageMeta({
  layout: 'default',
})

const { currentStep, totalSteps, nextStep, previousStep, goToStep } = useRegistration()
const { getLogoPath } = useLogoPath()
const logoPath = getLogoPath('shace-logo-white.svg')
const localePath = useLocalePath()
const { locale } = useI18n()
const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')

const stepProps = computed(() => ({
  previous: previousStep,
  next: nextStep,
}))

const stepComponents = {
  1: RegisterStep1,
  2: RegisterStep2,
  3: RegisterStep3,
  4: RegisterStep4,
  5: RegisterStep5,
  6: RegisterStep6,
  7: RegisterStep7,
  8: RegisterStep8,
  9: RegisterStep9,
  10: RegisterStep10,
}

const currentStepComponent = computed(() => {
  return stepComponents[currentStep.value as keyof typeof stepComponents]
})
</script>

<style scoped>
/* Step Transition Animations */
.step-enter-active,
.step-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.step-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

[dir="rtl"] .step-enter-from {
  transform: translateX(-20px);
}

[dir="rtl"] .step-leave-to {
  transform: translateX(20px);
}

.step-content {
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse animation for active step */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
</style>

