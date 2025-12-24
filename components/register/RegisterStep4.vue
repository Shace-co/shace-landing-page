<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">{{ $t('register.step4.title') }}</h1>
    <p class="text-lg text-gray-700 mb-8">
      {{ $t('register.step4.subtitle') }}
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Map Section -->
      <div>
        <Label class="text-gray-700 mb-2 block font-semibold">{{ $t('register.step4.mapLabel') }}</Label>
        <p class="text-sm text-gray-500 mb-4">{{ $t('register.step4.mapHint') }}</p>
        
        <!-- Map Placeholder - Replace with actual map integration later -->
        <div class="border-2 border-gray-200 rounded-lg h-96 bg-gray-100 relative overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <p class="text-gray-600">{{ $t('register.step4.mapPlaceholder') }}</p>
              <p class="text-sm text-gray-500 mt-2">{{ $t('register.step4.mapClick') }}</p>
            </div>
          </div>
          <!-- Map Pin -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Address Fields -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label for="addressEnglish" class="text-gray-700 mb-2 block">{{ $t('register.step4.addressEn') }}</Label>
          <Input
            id="addressEnglish"
            v-model="formData.addressEnglish"
            placeholder="e.g., Prince Turki St, Al Khobar"
            required
            class="w-full"
          />
        </div>

        <div>
          <Label for="addressArabic" class="text-gray-700 mb-2 block">{{ $t('register.step4.addressAr') }}</Label>
          <Input
            id="addressArabic"
            v-model="formData.addressArabic"
            placeholder="مثال: شارع الأمير تركي, الخبر"
            required
            class="w-full"
          />
        </div>
      </div>

      <div class="flex items-center justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          @click="previousStep()"
          class="border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
        >
          {{ $t('register.back') }}
        </Button>
        <Button
          type="submit"
          class="bg-primary text-white hover:bg-primary/90 px-8"
        >
          {{ $t('register.next') }}
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRegistration } from '~/composables/useRegistration'
import Input from '~/components/ui/Input.vue'
import Label from '~/components/ui/Label.vue'
import Button from '~/components/ui/Button.vue'

const { updateData, nextStep, previousStep } = useRegistration()

const formData = ref({
  addressEnglish: '',
  addressArabic: '',
})

const handleSubmit = () => {
  updateData({
    addressEnglish: formData.value.addressEnglish,
    addressArabic: formData.value.addressArabic,
  })
  nextStep()
}
</script>

