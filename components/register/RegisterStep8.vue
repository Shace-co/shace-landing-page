<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold text-primary mb-2">Assign Workspace Managers</h1>
    <p class="text-lg text-gray-700 mb-8">
      Who will be managing <strong>this workspace</strong>?
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Manager Form -->
      <div v-for="(manager, index) in managers" :key="index" class="space-y-4 p-4 border border-gray-200 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label :for="`manager-name-${index}`" class="text-gray-700 mb-2 block">Name *</Label>
            <Input
              :id="`manager-name-${index}`"
              v-model="manager.name"
              placeholder="Jane Doe"
              required
              class="w-full"
            />
          </div>

          <div>
            <Label :for="`manager-email-${index}`" class="text-gray-700 mb-2 block">Email *</Label>
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
          <Label :for="`manager-role-${index}`" class="text-gray-700 mb-2 block">Role & Permission Level</Label>
          <select
            :id="`manager-role-${index}`"
            v-model="manager.role"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select a role</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
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
          ADD USER
        </Button>
        <div class="flex gap-4">
          <Button
            type="button"
            variant="ghost"
            @click="skipStep"
            class="text-gray-600"
          >
            Skip for Now
          </Button>
          <Button
            type="submit"
            class="bg-primary text-white hover:bg-primary/90 px-8"
          >
            NEXT
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

