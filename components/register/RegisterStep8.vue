<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">{{ $t('register.step8.title') }}</h1>
    <p class="text-lg text-gray-700 mb-8">
      {{ $t('register.step8.subtitle') }} <strong>{{ $t('register.step8.subtitleBold') }}</strong>{{ $t('register.step8.subtitleEnd') }}
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Manager Form -->
      <div v-for="(manager, index) in managers" :key="index" class="space-y-4 p-4 border border-gray-200 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label :for="`manager-name-${index}`" class="text-gray-700 mb-2 block">{{ $t('register.step8.nameLabel') }}</Label>
            <Input
              :id="`manager-name-${index}`"
              v-model="manager.name"
              placeholder="Jane Doe"
              required
              class="w-full"
            />
          </div>

          <div>
            <Label :for="`manager-email-${index}`" class="text-gray-700 mb-2 block">{{ $t('register.step8.emailLabel') }}</Label>
            <Input
              :id="`manager-email-${index}`"
              v-model="manager.email"
              type="email"
              placeholder="jane@shace.co"
              required
              class="w-full"
            />
          </div>
        </div>

        <div>
          <Label :for="`manager-role-${index}`" class="text-gray-700 mb-2 block">{{ $t('register.step8.roleLabel') }}</Label>
          <select
            :id="`manager-role-${index}`"
            v-model="manager.role"
            class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 hover:border-primary/50 focus:border-primary"
          >
            <option value="" disabled class="text-gray-500">{{ $t('register.step8.selectRole') }}</option>
            <option value="manager" class="text-gray-900">{{ $t('register.step8.roleManager') }}</option>
            <option value="admin" class="text-gray-900">{{ $t('register.step8.roleAdmin') }}</option>
            <option value="supervisor" class="text-gray-900">{{ $t('register.step8.roleSupervisor') }}</option>
          </select>
        </div>
      </div>

      <div class="flex items-center justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          @click="addUser"
          class="bg-primary text-white hover:bg-primary/90"
        >
          {{ $t('register.step8.addUser') }}
        </Button>
        <div class="flex gap-4">
          <Button
            type="button"
            variant="ghost"
            @click="skipStep"
            class="text-gray-600"
          >
            {{ $t('register.step8.skip') }}
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

const managers = ref([
  {
    name: '',
    email: '',
    role: '',
  },
])

const addUser = () => {
  managers.value.push({
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
    workspaceManagers: managers.value.filter(m => m.name && m.email),
  })
  nextStep()
}
</script>

