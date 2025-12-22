import { ref, computed } from 'vue'

export interface RegistrationData {
  // Step 1: Email
  email: string
  
  // Step 3: Company Setup
  companyImage?: File | string
  companyNameEnglish: string
  companyNameArabic: string
  companyDomain: string
  crn: string
  vat: string
  businessPhone: string
  
  // Step 4: Business Location
  businessLatitude?: number
  businessLongitude?: number
  addressEnglish: string
  addressArabic: string
  
  // Step 5: Team Members
  teamMembers: Array<{
    name: string
    email: string
    role: string
  }>
  
  // Step 6: Workspace Setup
  workspaceImages?: File[] | string[]
  workspaceNameEnglish: string
  workspaceNameArabic: string
  workspaceEmail: string
  workspacePhone: string
  meterPrice: string
  workspaceCrn: string
  workspaceVat: string
  
  // Step 7: Workspace Location
  workspaceLatitude?: number
  workspaceLongitude?: number
  workspaceAddressEnglish: string
  workspaceAddressArabic: string
  
  // Step 8: Workspace Managers
  workspaceManagers: Array<{
    name: string
    email: string
    role: string
  }>
  
  // Step 9: Floor Layout
  floorPlans: Array<{
    file?: File | string
    nameEnglish: string
    nameArabic: string
    level: string
  }>
  
  // Step 10: Payment
  cardholderName: string
  cardNumber: string
  expirationDate: string
  securityCode: string
}

const currentStep = ref(1)
const registrationData = ref<Partial<RegistrationData>>({
  email: '',
  teamMembers: [],
  workspaceManagers: [],
  floorPlans: [],
})

const totalSteps = 10

export const useRegistration = () => {
  const nextStep = () => {
    if (currentStep.value < totalSteps) {
      // Add a small delay for smooth transition
      setTimeout(() => {
        currentStep.value++
        // Scroll to top of card
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
  }

  const previousStep = () => {
    if (currentStep.value > 1) {
      setTimeout(() => {
        currentStep.value--
        // Scroll to top of card
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
  }

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      currentStep.value = step
    }
  }

  const updateData = (data: Partial<RegistrationData>) => {
    registrationData.value = { ...registrationData.value, ...data }
  }

  const isStepComplete = computed(() => {
    // Add validation logic for each step
    switch (currentStep.value) {
      case 1:
        return !!registrationData.value.email
      case 3:
        return !!(
          registrationData.value.companyNameEnglish &&
          registrationData.value.companyNameArabic &&
          registrationData.value.companyDomain &&
          registrationData.value.crn &&
          registrationData.value.vat &&
          registrationData.value.businessPhone
        )
      default:
        return true
    }
  })

  return {
    currentStep,
    registrationData,
    totalSteps,
    nextStep,
    previousStep,
    goToStep,
    updateData,
    isStepComplete,
  }
}

