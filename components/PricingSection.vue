<template>
  <section class="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
    <div class="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
      <div class="flex flex-col justify-start items-center gap-4">
        <h2 class="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
          Simple, transparent pricing
        </h2>
        <p class="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
          One plan with everything you need to manage your workspace efficiently.
        </p>
      </div>
      <div class="pt-4">
        <div class="p-0.5 bg-[rgba(231,236,235,0.08)] rounded-lg outline outline-1 outline-border outline-offset-[-1px] flex justify-start items-center gap-1 md:mt-0 shadow-[0px_2px_4px_rgba(0,0,0,0.16)]">
          <button
            @click="isAnnual = true"
            :class="[
              'pl-2 pr-1 py-1 flex justify-start items-start gap-2 rounded-md transition-all',
              isAnnual ? 'bg-[rgba(231,236,235,0.12)] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]' : '',
            ]"
          >
            <span
              :class="[
                'text-center text-sm font-medium leading-tight',
                isAnnual ? 'text-foreground' : 'text-muted-foreground',
              ]"
            >
              Annually
            </span>
          </button>
          <button
            @click="isAnnual = false"
            :class="[
              'px-2 py-1 flex justify-start items-start rounded-md transition-all',
              !isAnnual ? 'bg-[rgba(231,236,235,0.12)] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]' : '',
            ]"
          >
            <span
              :class="[
                'text-center text-sm font-medium leading-tight',
                !isAnnual ? 'text-foreground' : 'text-muted-foreground',
              ]"
            >
              Monthly
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="self-stretch px-5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-6 max-w-[520px] mx-auto">
      <div
        v-for="plan in pricingPlans"
        :key="plan.name"
        :class="[
          'w-full p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6',
          plan.popular ? 'bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]' : 'bg-gradient-to-b from-gray-50/5 to-gray-50/0',
        ]"
        :style="plan.popular ? {} : { outline: '1px solid hsl(var(--border))', outlineOffset: '-1px' }"
      >
        <div class="self-stretch flex flex-col justify-start items-start gap-6">
          <div class="self-stretch flex flex-col justify-start items-start gap-8">
            <div
              :class="[
                'w-full h-5 text-sm font-medium leading-tight',
                plan.popular ? 'text-primary-foreground' : 'text-zinc-200',
              ]"
            >
              {{ plan.name }}
              <span
                v-if="plan.popular"
                class="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white"
              >
                <div class="text-center text-primary-foreground text-xs font-normal leading-tight break-words">
                  Popular
                </div>
              </span>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-1">
              <div class="flex justify-start items-center gap-1.5">
                <div
                  :class="[
                    'relative h-10 flex items-center text-3xl font-medium leading-10',
                    plan.popular ? 'text-primary-foreground' : 'text-zinc-50',
                  ]"
                >
                  <span class="invisible">{{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}</span>
                  <span
                    class="absolute inset-0 flex items-center transition-all duration-500"
                    :style="{
                      opacity: isAnnual ? 1 : 0,
                      transform: `scale(${isAnnual ? 1 : 0.8})`,
                      filter: `blur(${isAnnual ? 0 : 4}px)`,
                    }"
                    :aria-hidden="!isAnnual"
                  >
                    {{ plan.annualPrice }}
                  </span>
                  <span
                    class="absolute inset-0 flex items-center transition-all duration-500"
                    :style="{
                      opacity: !isAnnual ? 1 : 0,
                      transform: `scale(${!isAnnual ? 1 : 0.8})`,
                      filter: `blur(${!isAnnual ? 0 : 4}px)`,
                    }"
                    :aria-hidden="isAnnual"
                  >
                    {{ plan.monthlyPrice }}
                  </span>
                </div>
                <div
                  :class="[
                    'text-center text-sm font-medium leading-tight',
                    plan.popular ? 'text-primary-foreground/70' : 'text-zinc-400',
                  ]"
                >
                  /month
                </div>
              </div>
              <div
                :class="[
                  'self-stretch text-sm font-medium leading-tight',
                  plan.popular ? 'text-primary-foreground/70' : 'text-zinc-400',
                ]"
              >
                {{ plan.description }}
              </div>
            </div>
          </div>
          <Button
            :class="[
              'self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center',
              plan.buttonClass,
            ]"
          >
            <div class="px-1.5 flex justify-center items-center gap-2">
              <span
                :class="[
                  'text-center text-sm font-medium leading-tight',
                  plan.popular ? 'text-primary' : 'text-zinc-950',
                ]"
              >
                {{ plan.buttonText }}
              </span>
            </div>
          </Button>
        </div>
        <div class="self-stretch flex flex-col justify-start items-start gap-4">
          <div
            :class="[
              'self-stretch text-sm font-medium leading-tight',
              plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground',
            ]"
          >
            Everything included:
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-3">
            <div
              v-for="feature in plan.features"
              :key="feature"
              class="self-stretch flex justify-start items-center gap-2"
            >
              <div class="w-4 h-4 flex items-center justify-center">
                <svg
                  :class="[
                    'w-full h-full',
                    plan.popular ? 'text-primary-foreground' : 'text-muted-foreground',
                  ]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div
                :class="[
                  'leading-tight font-normal text-sm text-left',
                  plan.popular ? 'text-primary-foreground' : 'text-muted-foreground',
                ]"
              >
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/ui/Button.vue'

const isAnnual = ref(true)

const pricingPlans = [
  {
    name: "Shace",
    monthlyPrice: "SAR 20",
    annualPrice: "SAR 16",
    description: "Complete workspace management solution for businesses of all sizes.",
    features: [
      "Interactive office mapping",
      "Multi-branch support",
      "Tenant registration & CRM",
      "Workspace insights & occupancy dashboard",
      "Custom rent sheets & payment management",
      "WhatsApp integration",
      "Access control integration",
      "Lease period tracking",
      "Performance metrics",
      "Dynamic reports",
      "User activity logs",
      "Data backup & privacy compliance",
    ],
    buttonText: "Get Started",
    buttonClass: "bg-primary-foreground shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-primary text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-primary-foreground/90",
    popular: true,
  },
]
</script>

