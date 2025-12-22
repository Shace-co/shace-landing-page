<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">Upload Your Floor Layout</h1>
    <p class="text-lg text-gray-700 mb-8">
      We'll convert it into an interactive map for easy booking and management.
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Floor Plan Upload -->
      <div v-for="(plan, index) in floorPlans" :key="index" class="space-y-4 p-4 border border-gray-200 rounded-lg">
        <div>
          <Label class="text-gray-700 mb-2 block">Upload Floor Plan*</Label>
          <div
            @click="triggerFileInput(index)"
            @dragover.prevent
            @drop.prevent="(e) => handleDrop(e, index)"
            class="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-primary transition-colors"
          >
            <input
              :ref="(el) => setFileInputRef(el, index)"
              type="file"
              accept="image/svg+xml,image/png,image/jpeg"
              @change="(e) => handleFileChange(e, index)"
              class="hidden"
            />
            <div class="flex flex-col items-start">
              <svg class="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-sm text-gray-600">
                Click to Upload or drag and drop
              </p>
              <p class="text-xs text-gray-500 mt-1">
                SVG, PNG or JPG (MAX. 800×400px)
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label :for="`floor-name-en-${index}`" class="text-gray-700 mb-2 block">Floor Name in English *</Label>
            <Input
              :id="`floor-name-en-${index}`"
              v-model="plan.nameEnglish"
              placeholder="Ground Floor"
              required
              class="w-full"
            />
          </div>

          <div>
            <Label :for="`floor-name-ar-${index}`" class="text-gray-700 mb-2 block">Floor Name in Arabic *</Label>
            <Input
              :id="`floor-name-ar-${index}`"
              v-model="plan.nameArabic"
              placeholder="الطابق الأرضي"
              required
              class="w-full"
            />
          </div>
        </div>

        <div>
          <Label :for="`floor-level-${index}`" class="text-gray-700 mb-2 block">Floor Level*</Label>
          <Input
            :id="`floor-level-${index}`"
            v-model="plan.level"
            placeholder="0, 1, 2..."
            required
            class="w-full"
          />
        </div>
      </div>

      <div class="flex items-center justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          @click="addFloorPlan"
          class="border-primary text-primary hover:bg-primary/10"
        >
          + ADD FLOOR PLAN
        </Button>
        <div class="flex gap-4">
          <Button
            type="button"
            variant="ghost"
            @click="skipStep"
            class="text-gray-600"
          >
            Skip and upload later
          </Button>
          <Button
            type="submit"
            class="bg-primary text-white hover:bg-primary/90 px-8 uppercase"
          >
            UPLOAD FLOOR PLAN
          </Button>
        </div>
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

const floorPlans = ref([
  {
    file: null as File | null,
    nameEnglish: '',
    nameArabic: '',
    level: '',
  },
])

const fileInputRefs = ref<(HTMLInputElement | null)[]>([])

const setFileInputRef = (el: HTMLInputElement | null, index: number) => {
  if (el) {
    fileInputRefs.value[index] = el
  }
}

const triggerFileInput = (index: number) => {
  fileInputRefs.value[index]?.click()
}

const handleFileChange = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    floorPlans.value[index].file = target.files[0]
  }
}

const handleDrop = (event: DragEvent, index: number) => {
  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    floorPlans.value[index].file = event.dataTransfer.files[0]
  }
}

const addFloorPlan = () => {
  floorPlans.value.push({
    file: null,
    nameEnglish: '',
    nameArabic: '',
    level: '',
  })
  fileInputRefs.value.push(null)
}

const skipStep = () => {
  nextStep()
}

const handleSubmit = () => {
  updateData({
    floorPlans: floorPlans.value.filter(p => p.nameEnglish && p.nameArabic && p.level),
  })
  nextStep()
}
</script>

