<template>
  <div class="max-w-2xl mx-auto">
    <!-- Payment Form -->
    <div class="bg-white p-8 rounded-lg border border-gray-200">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <Label for="cardholderName" class="text-gray-700 mb-2 block">{{ $t('register.step10.cardholderName') }}</Label>
            <Input
              id="cardholderName"
              v-model="formData.cardholderName"
              :placeholder="$t('register.step10.cardholderPlaceholder')"
              required
              class="w-full"
            />
          </div>

          <div>
            <Label for="cardNumber" class="text-gray-700 mb-2 block">{{ $t('register.step10.cardNumber') }}</Label>
            <div class="flex items-center gap-2">
              <Input
                id="cardNumber"
                v-model="formData.cardNumber"
                :placeholder="$t('register.step10.cardNumberPlaceholder')"
                required
                class="w-full"
                maxlength="19"
              />
              <div class="flex gap-2">
                <img src="https://via.placeholder.com/40x25/1a1a1a/ffffff?text=MC" alt="Mastercard" class="h-6" />
                <img src="https://via.placeholder.com/40x25/0066cc/ffffff?text=M" alt="Mada" class="h-6" />
                <img src="https://via.placeholder.com/40x25/1a1f71/ffffff?text=V" alt="Visa" class="h-6" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <Label for="expirationDate" class="text-gray-700 mb-2 block">{{ $t('register.step10.expirationDate') }}</Label>
              <Input
                id="expirationDate"
                v-model="formData.expirationDate"
                :placeholder="$t('register.step10.expirationPlaceholder')"
                required
                class="w-full"
                maxlength="5"
              />
            </div>

            <div>
              <Label for="securityCode" class="text-gray-700 mb-2 block">{{ $t('register.step10.securityCode') }}</Label>
              <Input
                id="securityCode"
                v-model="formData.securityCode"
                :placeholder="$t('register.step10.securityPlaceholder')"
                required
                class="w-full"
                type="password"
                maxlength="4"
              />
            </div>
          </div>

          <Button
            type="submit"
            class="w-full bg-primary text-white hover:bg-primary/90 py-3 text-base font-medium"
          >
            {{ $t('register.step10.button') }}
          </Button>
        </form>
    </div>
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
  cardholderName: '',
  cardNumber: '',
  expirationDate: '',
  securityCode: '',
})

const { registrationData } = useRegistration()

const handleSubmit = () => {
  updateData({
    cardholderName: formData.value.cardholderName,
    cardNumber: formData.value.cardNumber,
    expirationDate: formData.value.expirationDate,
    securityCode: formData.value.securityCode,
  })
  
  // TODO: Submit to backend
  console.log('Registration complete!', registrationData.value)
  
  // Redirect to success page or dashboard
  // navigateTo('/success')
}
</script>

