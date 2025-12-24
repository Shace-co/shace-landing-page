<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">{{ $t('register.step6.title') }}</h1>
    <p class="text-lg text-gray-700 mb-8">
      {{ $t('register.step6.subtitle') }}
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Workspace Images Upload -->
      <div>
        <Label class="text-gray-700 mb-2 block">{{ $t('register.step6.workspaceImages') }}</Label>
        <p class="text-sm text-gray-500 mb-3">{{ $t('register.step6.workspaceImagesHint') }}</p>
        <div
          @click="triggerFileInput"
          @dragover.prevent
          @drop.prevent="handleDrop"
          class="border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-primary transition-colors"
        >
          <input
            ref="fileInput"
            type="file"
            accept="image/svg+xml,image/png,image/jpeg"
            multiple
            @change="handleFileChange"
            class="hidden"
          />
          <div class="flex flex-col items-center text-center">
            <svg class="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p class="text-sm text-gray-600">
              Click to Upload or drag and drop
            </p>
            <p class="text-xs text-gray-500 mt-1">
              SVG, PNG or JPG (MAX. 800x400px)
            </p>
          </div>
        </div>
      </div>

      <!-- Workspace Details -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label for="workspaceNameEnglish" class="text-gray-700 mb-2 block">{{ $t('register.step6.workspaceNameEn') }}</Label>
          <Input
            id="workspaceNameEnglish"
            v-model="formData.workspaceNameEnglish"
            placeholder="Shace HQ - Al Khobar"
            required
            class="w-full"
          />
        </div>

        <div>
          <Label for="workspaceNameArabic" class="text-gray-700 mb-2 block">{{ $t('register.step6.workspaceNameAr') }}</Label>
          <Input
            id="workspaceNameArabic"
            v-model="formData.workspaceNameArabic"
            placeholder="شيس - المكتب الرئيسي"
            required
            class="w-full"
          />
        </div>

        <div>
          <Label for="workspaceEmail" class="text-gray-700 mb-2 block">{{ $t('register.step6.workspaceEmail') }}</Label>
          <Input
            id="workspaceEmail"
            v-model="formData.workspaceEmail"
            type="email"
            placeholder="hq@shace.com"
            required
            class="w-full"
          />
        </div>

        <div>
          <Label for="workspacePhone" class="text-gray-700 mb-2 block">{{ $t('register.step6.workspacePhone') }}</Label>
          <Input
            id="workspacePhone"
            v-model="formData.workspacePhone"
            placeholder="+966 55 123 4567"
            required
            class="w-full"
          />
        </div>

        <div>
          <Label for="meterPrice" class="text-gray-700 mb-2 block">{{ $t('register.step6.meterPrice') }}</Label>
          <div class="flex">
            <Input
              id="meterPrice"
              v-model="formData.meterPrice"
              type="number"
              placeholder="150"
              required
              class="w-full rounded-r-none"
            />
            <span class="inline-flex items-center px-4 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-700">
              SAR
            </span>
          </div>
        </div>

        <div>
          <Label for="workspaceCrn" class="text-gray-700 mb-2 block">{{ $t('register.step6.workspaceCRN') }}</Label>
          <Input
            id="workspaceCrn"
            v-model="formData.workspaceCrn"
            placeholder="1010123456"
            required
            class="w-full"
          />
        </div>

        <div>
          <Label for="workspaceVat" class="text-gray-700 mb-2 block">{{ $t('register.step6.workspaceVAT') }}</Label>
          <Input
            id="workspaceVat"
            v-model="formData.workspaceVat"
            placeholder="310123456700003"
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
          Back
        </Button>
        <Button
          type="submit"
          class="bg-primary text-white hover:bg-primary/90 px-8 uppercase"
        >
          ADD WORKSPACE
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

const fileInput = ref<HTMLInputElement | null>(null)
const formData = ref({
  workspaceImages: [] as File[],
  workspaceNameEnglish: '',
  workspaceNameArabic: '',
  workspaceEmail: '',
  workspacePhone: '',
  meterPrice: '',
  workspaceCrn: '',
  workspaceVat: '',
})

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    formData.value.workspaceImages = Array.from(target.files)
  }
}

const handleDrop = (event: DragEvent) => {
  if (event.dataTransfer?.files) {
    formData.value.workspaceImages = Array.from(event.dataTransfer.files)
  }
}

const handleSubmit = () => {
  updateData({
    workspaceImages: formData.value.workspaceImages,
    workspaceNameEnglish: formData.value.workspaceNameEnglish,
    workspaceNameArabic: formData.value.workspaceNameArabic,
    workspaceEmail: formData.value.workspaceEmail,
    workspacePhone: formData.value.workspacePhone,
    meterPrice: formData.value.meterPrice,
    workspaceCrn: formData.value.workspaceCrn,
    workspaceVat: formData.value.workspaceVat,
  })
  nextStep()
}
</script>

