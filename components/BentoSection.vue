<template>
  <section class="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
    <div class="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
      <div class="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
      <div class="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
        <div class="flex flex-col justify-start items-center gap-4">
          <h2 class="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
            Empower Your Workspace Management
          </h2>
          <p class="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
            From interactive office mapping to financial management, Shace provides everything you need to digitize and optimize your workspace operations.
          </p>
        </div>
      </div>
      <div class="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        <BentoCard
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :description="card.description"
          :image="card.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BentoCard from '~/components/BentoCard.vue'

const { getImagePath } = useLogoPath()

const cards = [
  {
    title: "Interactive Office Mapping",
    description: "Visualize your space layout, assign offices, and manage reservations using an interactive floor plan interface.",
    image: getImagePath("/images/ai-code-reviews.png"),
  },
  {
    title: "Workspace Insights & Occupancy Dashboard",
    description: "Get real-time insights on occupancy rates, tenant turnover, and space utilization trends.",
    image: getImagePath("/images/realtime-coding-previews.png"),
  },
  {
    title: "Multi-Branch Support",
    description: "Manage multiple buildings or floors under one unified platform with ease.",
    image: getImagePath("/images/mcp-connectivity.png"),
  },
  {
    title: "Tenant Registration & CRM",
    description: "Onboard new tenants with streamlined forms and keep their profiles and documentation organized.",
    image: getImagePath("/images/parallel-coding-agents.png"),
  },
  {
    title: "Custom Rent Sheets & Payments",
    description: "Set pricing per office or desk, assign discounts, and manage monthly payment schedules with VAT and invoice management.",
    image: getImagePath("/images/deployment-easy.png"),
  },
  {
    title: "WhatsApp Integration",
    description: "Send automated payment reminders, announcements, or one-on-one messages to tenants directly through WhatsApp.",
    image: getImagePath("/images/one-click-integrations.png"),
  },
]
</script>

