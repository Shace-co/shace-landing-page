<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Branding & Marketing -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);"></div>
      </div>
      
      <!-- Logo -->
      <div class="relative z-10">
        <NuxtLink to="/" class="flex items-center gap-3 mb-8">
          <img
            :src="logoPath"
            alt="Shace Logo"
            width="163"
            height="44"
            class="h-8 w-auto"
          />
        </NuxtLink>
      </div>

      <!-- Marketing Content -->
      <div class="relative z-10 flex-1 flex flex-col justify-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Welcome back to Shace.
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Sign in to access your workspace management dashboard and continue managing your operations.
        </p>
      </div>

      <!-- Footer -->
      <div class="relative z-10 flex items-center justify-between text-sm text-white/70">
        <span>Copyright © {{ new Date().getFullYear() }} Shace Enterprises LTD.</span>
        <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
      </div>
    </div>

    <!-- Right Side - Sign In Form -->
    <div class="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 md:p-8 lg:p-12 overflow-y-auto">
      <div class="w-full max-w-md">
        <!-- Mobile Logo -->
        <div class="lg:hidden mb-8">
          <NuxtLink to="/" class="flex items-center gap-3">
            <img
              :src="logoPath"
              alt="Shace Logo"
              width="163"
              height="44"
              class="h-8 w-auto"
            />
          </NuxtLink>
        </div>

        <!-- Sign In Form -->
        <div>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <!-- Email Field -->
            <div>
              <Label for="email" class="text-gray-900 mb-2 block text-sm font-medium">
                Email address <span class="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                ref="emailInput"
                v-model="formData.email"
                type="email"
                placeholder="Enter your email"
                required
                :class="[
                  'w-full transition-all',
                  formData.email && !isValidEmail ? 'border-red-500 focus:ring-red-500' : '',
                  formData.email && isValidEmail ? 'border-green-500 focus:ring-green-500' : ''
                ]"
                @blur="validateEmail"
              />
              <p v-if="formData.email && !isValidEmail" class="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Please enter a valid email address
              </p>
            </div>

            <!-- Password Field -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <Label for="password" class="text-gray-900 text-sm font-medium">
                  Password <span class="text-red-500">*</span>
                </Label>
                <NuxtLink
                  to="/forgot-password"
                  class="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  Forgotten your password?
                </NuxtLink>
              </div>
              <div class="relative">
                <Input
                  id="password"
                  v-model="formData.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Enter your password"
                  required
                  class="w-full pr-10"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
                  aria-label="Toggle password visibility"
                  tabindex="0"
                >
                  <svg
                    v-if="showPassword"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                  <svg
                    v-else
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Remember Me Checkbox -->
            <div class="flex items-center pt-1">
              <input
                id="remember"
                v-model="formData.rememberMe"
                type="checkbox"
                class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2 focus:ring-offset-0 cursor-pointer transition-colors"
              />
              <Label for="remember" class="ml-2.5 text-gray-900 cursor-pointer text-sm select-none">
                Remember me
              </Label>
            </div>

            <!-- Sign In Button -->
            <Button
              type="submit"
              :disabled="isSubmitting || !isFormValid"
              class="w-full bg-primary text-white hover:bg-primary/95 py-3 text-base font-semibold uppercase transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                Sign in
              </span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            </Button>
          </form>

          <!-- Sign Up Link -->
          <div class="mt-8 pt-6 border-t border-gray-200 text-center">
            <p class="text-gray-600 text-sm">
              Don't have an account?
              <NuxtLink
                to="/register"
                class="text-primary hover:text-primary/80 hover:underline font-medium transition-colors ml-1"
              >
                Sign up
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useLogoPath } from '~/composables/useLogoPath'
import Input from '~/components/ui/Input.vue'
import Label from '~/components/ui/Label.vue'
import Button from '~/components/ui/Button.vue'

definePageMeta({
  layout: 'default',
})

const { getLogoPath } = useLogoPath()
const logoPath = getLogoPath('shace-logo-white.svg')

const formData = ref({
  email: '',
  password: '',
  rememberMe: false,
})

const showPassword = ref(false)
const isSubmitting = ref(false)
const emailInput = ref<InstanceType<typeof Input> | null>(null)

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidEmail = computed(() => {
  if (!formData.value.email) return true // Don't show error until user interacts
  return emailRegex.test(formData.value.email)
})

const validateEmail = () => {
  // Trigger validation on blur
}

// Form validation
const isFormValid = computed(() => {
  return isValidEmail.value && formData.value.email.length > 0 && formData.value.password.length > 0
})

// Auto-focus email field on mount
onMounted(() => {
  // Focus email input after component mounts
  setTimeout(() => {
    const emailElement = document.getElementById('email')
    if (emailElement) {
      emailElement.focus()
    }
  }, 100)
})

const handleSubmit = async () => {
  if (!isFormValid.value) return
  
  isSubmitting.value = true
  // TODO: Implement sign in functionality
  await new Promise(resolve => setTimeout(resolve, 1500))
  console.log('Sign in attempt:', {
    email: formData.value.email,
    rememberMe: formData.value.rememberMe,
  })
  isSubmitting.value = false
  
  // TODO: Redirect to dashboard on success
  // navigateTo('/dashboard')
}
</script>

