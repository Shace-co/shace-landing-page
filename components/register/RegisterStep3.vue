<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">{{ $t('register.step3.title') }}</h1>
    <p class="text-lg text-gray-700 mb-8">
      {{ $t('register.step3.subtitle') }} <strong>{{ $t('register.step3.subtitleBold') }}</strong>
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Company Image Upload -->
      <div>
        <Label class="text-gray-700 mb-2 block">{{ $t('register.step3.companyImageLabel') }}</Label>
        <p class="text-sm text-gray-500 mb-3">{{ $t('register.step3.companyImageHint') }}</p>
        <div
          @click="triggerFileInput"
          @dragover.prevent="isDragging = true"
          @dragleave="isDragging = false"
          @drop.prevent="handleDrop"
          :class="[
            'border-2 border-dashed rounded-lg p-8 cursor-pointer transition-all duration-200',
            isDragging || formData.companyImage
              ? 'border-primary bg-primary/5 scale-[1.02]'
              : 'border-gray-300 hover:border-primary hover:bg-gray-50'
          ]"
        >
          <input
            ref="fileInput"
            type="file"
            accept="image/svg+xml,image/png,image/jpeg"
            @change="handleFileChange"
            class="hidden"
          />
          <div class="flex flex-col items-center text-center">
            <svg 
              :class="[
                'w-12 h-12 mb-4 transition-all duration-200',
                formData.companyImage ? 'text-primary' : 'text-gray-400'
              ]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p v-if="!formData.companyImage" class="text-sm text-gray-600">
              {{ $t('register.step3.uploadClick') }}
            </p>
            <p v-else class="text-sm text-primary font-medium flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ $t('register.step3.fileSelected') }} {{ formData.companyImage.name }}
            </p>
            <p class="text-xs text-gray-500 mt-1">
              {{ $t('register.step3.fileFormat') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Company Name English -->
      <div>
        <Label for="companyNameEnglish" class="text-gray-700 mb-2 block">{{ $t('register.step3.companyNameEn') }}</Label>
        <Input
          id="companyNameEnglish"
          v-model="formData.companyNameEnglish"
          placeholder="Shace"
          required
          class="w-full"
        />
      </div>

      <!-- Company Name Arabic -->
      <div>
        <Label for="companyNameArabic" class="text-gray-700 mb-2 block">{{ $t('register.step3.companyNameAr') }}</Label>
        <Input
          id="companyNameArabic"
          v-model="formData.companyNameArabic"
          placeholder="شیس"
          required
          class="w-full"
        />
      </div>

      <!-- Company Domain -->
      <div>
        <Label for="companyDomain" class="text-gray-700 mb-2 block">{{ $t('register.step3.companyDomain') }}</Label>
        <Input
          id="companyDomain"
          v-model="formData.companyDomain"
          placeholder="workspace.shace.co"
          required
          class="w-full"
        />
      </div>

      <!-- CRN -->
      <div>
        <Label for="crn" class="text-gray-700 mb-2 block">{{ $t('register.step3.crn') }}</Label>
        <Input
          id="crn"
          v-model="formData.crn"
          placeholder="1234567890"
          required
          class="w-full"
        />
      </div>

      <!-- VAT -->
      <div>
        <Label for="vat" class="text-gray-700 mb-2 block">Tax Identification Number (VAT)*</Label>
        <Input
          id="vat"
          v-model="formData.vat"
          placeholder="310123456700003"
          required
          class="w-full"
        />
      </div>

      <!-- Business Phone -->
      <div>
        <Label for="businessPhone" class="text-gray-700 mb-2 block">{{ $t('register.step3.businessPhone') }}</Label>
        <Input
          id="businessPhone"
          v-model="formData.businessPhone"
          placeholder="+966 50 000 0000"
          required
          class="w-full"
        />
      </div>

      <div class="flex items-center justify-between pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          @click="previousStep()"
          class="px-6 transition-all border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Button>
        <Button
          type="submit"
          class="bg-primary text-white hover:bg-primary/95 px-8 transition-all shadow-lg hover:shadow-xl"
        >
          NEXT
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
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

defineProps<{
  previous?: () => void
  next?: () => void
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const formData = ref({
  companyImage: null as File | null,
  companyNameEnglish: '',
  companyNameArabic: '',
  companyDomain: '',
  crn: '',
  vat: '',
  businessPhone: '',
})

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    formData.value.companyImage = target.files[0]
  }
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    formData.value.companyImage = event.dataTransfer.files[0]
  }
}

const handleSubmit = () => {
  updateData({
    companyImage: formData.value.companyImage || undefined,
    companyNameEnglish: formData.value.companyNameEnglish,
    companyNameArabic: formData.value.companyNameArabic,
    companyDomain: formData.value.companyDomain,
    crn: formData.value.crn,
    vat: formData.value.vat,
    businessPhone: formData.value.businessPhone,
  })
  nextStep()
}

defineEmits<{
  previous: []
}>()
</script>

