<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">{{ $t('register.step7.title') }}</h1>
    <p class="text-lg text-gray-700 mb-8">
      {{ $t('register.step7.subtitle') }} <strong>{{ $t('register.step7.subtitleBold') }}</strong>
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Map Section -->
      <div>
        <Label class="text-gray-700 mb-2 block font-semibold">{{ $t('register.step7.mapLabel') }}</Label>
        <p class="text-sm text-gray-500 mb-4">{{ $t('register.step7.mapHint') }}</p>
        
        <!-- Map Placeholder -->
        <div class="border-2 border-gray-200 rounded-lg h-96 bg-gray-100 relative overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <p class="text-gray-600">{{ $t('register.step7.mapPlaceholder') }}</p>
              <p class="text-sm text-gray-500 mt-2">{{ $t('register.step7.mapClick') }}</p>
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
          <Label for="workspaceAddressEnglish" class="text-gray-700 mb-2 block">{{ $t('register.step7.addressEn') }}</Label>
          <Input
            id="workspaceAddressEnglish"
            v-model="formData.workspaceAddressEnglish"
            placeholder="Prince Turki St, Office 2"
            required
            class="w-full"
          />
        </div>

        <div>
          <Label for="workspaceAddressArabic" class="text-gray-700 mb-2 block">{{ $t('register.step7.addressAr') }}</Label>
          <Input
            id="workspaceAddressArabic"
            v-model="formData.workspaceAddressArabic"
            placeholder="شارع الأمير تركي، المكتب رقم 2"
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
  workspaceAddressEnglish: '',
  workspaceAddressArabic: '',
})

const handleSubmit = () => {
  updateData({
    workspaceAddressEnglish: formData.value.workspaceAddressEnglish,
    workspaceAddressArabic: formData.value.workspaceAddressArabic,
  })
  nextStep()
}
</script>

