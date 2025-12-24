<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">{{ $t('register.step5.title') }}</h1>
    <p class="text-lg text-gray-700 mb-8">
      {{ $t('register.step5.subtitle') }} <strong>{{ $t('register.step5.subtitleBold') }}</strong>{{ $t('register.step5.subtitleEnd') }}
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Team Member Form -->
      <div v-for="(member, index) in teamMembers" :key="index" class="space-y-4 p-4 border border-gray-200 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label :for="`name-${index}`" class="text-gray-700 mb-2 block">{{ $t('register.step5.userName') }}</Label>
            <Input
              :id="`name-${index}`"
              v-model="member.name"
              placeholder="John Doe"
              required
              class="w-full"
            />
          </div>

          <div>
            <Label :for="`email-${index}`" class="text-gray-700 mb-2 block">{{ $t('register.step5.userEmail') }}</Label>
            <Input
              :id="`email-${index}`"
              v-model="member.email"
              type="email"
              placeholder="john@shace.co"
              required
              class="w-full"
            />
          </div>
        </div>

        <div>
          <Label :for="`role-${index}`" class="text-gray-700 mb-2 block">{{ $t('register.step5.roleLabel') }}</Label>
          <select
            :id="`role-${index}`"
            v-model="member.role"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 hover:border-primary/50 focus:border-primary"
          >
            <option value="" disabled class="text-gray-500">{{ $t('register.step5.selectRole') }}</option>
            <option value="owner" class="text-gray-900">{{ $t('register.step5.roleOwner') }}</option>
            <option value="admin" class="text-gray-900">{{ $t('register.step5.roleAdmin') }}</option>
            <option value="manager" class="text-gray-900">{{ $t('register.step5.roleManager') }}</option>
            <option value="staff" class="text-gray-900">{{ $t('register.step5.roleStaff') }}</option>
          </select>
        </div>
      </div>

      <div class="flex items-center justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          @click="addMoreUsers"
          class="border-primary text-primary hover:bg-primary/10"
        >
          {{ $t('register.step5.addMore') }}
        </Button>
        <div class="flex gap-4">
          <Button
            type="button"
            variant="ghost"
            @click="skipStep"
            class="text-gray-600"
          >
            {{ $t('register.step5.skip') }}
          </Button>
          <Button
            type="submit"
            class="bg-primary text-white hover:bg-primary/90 px-8"
          >
            {{ $t('register.next') }}
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

const teamMembers = ref([
  {
    name: '',
    email: '',
    role: '',
  },
])

const addMoreUsers = () => {
  teamMembers.value.push({
    name: '',
    email: '',
    role: '',
  })
}

const skipStep = () => {
  nextStep()
}

const handleSubmit = () => {
  updateData({
    teamMembers: teamMembers.value.filter(m => m.name && m.email),
  })
  nextStep()
}
</script>

