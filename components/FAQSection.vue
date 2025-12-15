<template>
  <section class="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
    <div class="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
    <div class="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
      <div class="flex flex-col justify-start items-center gap-4">
        <h2 class="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
          Frequently Asked Questions
        </h2>
        <p class="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
          Everything you need to know about Shace and how it can transform your workspace management
        </p>
      </div>
    </div>
    <div class="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
      <div
        v-for="(faq, index) in faqData"
        :key="index"
        :class="[
          'w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer',
        ]"
        @click="toggleItem(index)"
      >
        <div class="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
          <div class="flex-1 text-foreground text-base font-medium leading-6 break-words">{{ faq.question }}</div>
          <div class="flex justify-center items-center">
            <svg
              :class="[
                'w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out',
                openItems.has(index) ? 'rotate-180 scale-110' : 'rotate-0 scale-100',
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div
          :class="[
            'overflow-hidden transition-all duration-500 ease-out',
            openItems.has(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
          ]"
          style="transition-property: max-height, opacity, padding; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"
        >
          <div
            :class="[
              'px-5 transition-all duration-500 ease-out',
              openItems.has(index) ? 'pb-[18px] pt-2 translate-y-0' : 'pb-0 pt-0 -translate-y-2',
            ]"
          >
            <div class="text-foreground/80 text-sm font-normal leading-6 break-words">{{ faq.answer }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const faqData = [
  {
    question: "What is Shace and who is it for?",
    answer: "Shace is an all-in-one platform designed to streamline how businesses manage, book, and operate their physical workspaces. Whether you're a co-working space provider, a corporate office, or a flexible space operator, Shace helps you digitize your space management—from bookings and team coordination to access control and usage analytics.",
  },
  {
    question: "How does Shace help with workspace bookings?",
    answer: "Shace provides an intuitive booking system that allows team members to easily reserve workspaces, meeting rooms, and shared areas. The platform offers real-time availability, automated confirmations, and smart scheduling to optimize space utilization and reduce conflicts.",
  },
  {
    question: "Can I integrate Shace with my existing access control systems?",
    answer: "Yes! Shace offers seamless integrations with popular access control systems and can connect with your existing security infrastructure. Our platform allows you to manage access permissions, track entry/exit, and maintain security compliance across all your workspace locations.",
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes basic booking management, team coordination tools, single workspace location support, up to 10 team members, and basic usage analytics. It's perfect for small teams getting started with workspace digitization.",
  },
  {
    question: "How does Shace improve space utilization?",
    answer: "Shace provides comprehensive usage analytics that help you understand how your spaces are being used. With real-time data on occupancy rates, peak usage times, and booking patterns, you can make informed decisions to optimize your workspace layout and improve efficiency.",
  },
  {
    question: "Is my workspace data secure with Shace?",
    answer: "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data transmission, and compliance with industry standards. Your workspace data never leaves your secure environment without your explicit permission, and we offer on-premises deployment options for enterprise customers.",
  },
]

const openItems = ref<Set<number>>(new Set())

const toggleItem = (index: number) => {
  const newOpenItems = new Set(openItems.value)
  if (newOpenItems.has(index)) {
    newOpenItems.delete(index)
  } else {
    newOpenItems.add(index)
  }
  openItems.value = newOpenItems
}
</script>

