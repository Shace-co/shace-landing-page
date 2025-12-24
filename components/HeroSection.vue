<template>
  <section
    class="flex flex-col items-center text-center relative overflow-hidden py-0 px-0
         w-full h-screen"
  >
    <!-- SVG Background -->
    <div class="absolute inset-0 z-0 w-full h-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1220 810"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        class="w-full h-full"
      >
        <g clip-path="url(#clip0_186_1134)">
          <mask
            id="mask0_186_1134"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="10"
            y="-1"
            width="1200"
            height="812"
          >
            <rect x="10" y="-0.84668" width="1200" height="811.693" fill="url(#paint0_linear_186_1134)" />
          </mask>
          <g mask="url(#mask0_186_1134)">
            <!-- Grid Rectangles -->
            <rect
              v-for="rect in gridRects"
              :key="`rect-${rect.x}-${rect.y}`"
              :x="rect.x"
              :y="rect.y"
              width="35.6"
              height="35.6"
              stroke="hsl(var(--foreground))"
              stroke-opacity="0.25"
              stroke-width="0.4"
              stroke-dasharray="2 2"
              fill="none"
            />
            <!-- Specific Rectangles with fill -->
            <rect x="699.711" y="81" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.18" />
            <rect x="195.711" y="153" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.19" />
            <rect x="1023.71" y="153" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.19" />
            <rect x="123.711" y="225" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.19" />
            <rect x="1095.71" y="225" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.19" />
            <rect x="951.711" y="297" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.19" />
            <rect x="231.711" y="333" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.17" />
            <rect x="303.711" y="405" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.17" />
            <rect x="87.7109" y="405" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.19" />
            <rect x="519.711" y="405" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.18" />
            <rect x="771.711" y="405" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.19" />
            <rect x="591.711" y="477" width="36" height="36" fill="hsl(var(--foreground))" fill-opacity="0.17" />
          </g>

          <g filter="url(#filter0_f_186_1134)">
            <path
              d="M1447.45 -87.0203V-149.03H1770V1248.85H466.158V894.269C1008.11 894.269 1447.45 454.931 1447.45 -87.0203Z"
              fill="url(#paint1_linear_186_1134)"
            />
          </g>

          <g filter="url(#filter1_f_186_1134)">
            <path
              d="M1383.45 -151.02V-213.03H1706V1184.85H402.158V830.269C944.109 830.269 1383.45 390.931 1383.45 -151.02Z"
              fill="#2B0917"
              fill-opacity="0.85"
            />
          </g>

          <g style="mix-blend-mode: lighten" filter="url(#filter2_f_186_1134)">
            <path
              d="M1567.45 -231.02V-293.03H1890V1104.85H586.158V750.269C1128.11 750.269 1567.45 310.931 1567.45 -231.02Z"
              fill="url(#paint3_linear_186_1134)"
            />
          </g>
        </g>

        <rect
          x="0.5"
          y="0.5"
          width="1219"
          height="809"
          rx="15.5"
          stroke="hsl(var(--foreground))"
          stroke-opacity="0.06"
          fill="none"
        />

        <defs>
          <filter
            id="filter0_f_186_1134"
            x="147.369"
            y="-467.818"
            width="1941.42"
            height="2035.46"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="159.394" result="effect1_foregroundBlur_186_1134" />
          </filter>
          <filter
            id="filter1_f_186_1134"
            x="-554.207"
            y="-1169.39"
            width="3216.57"
            height="3310.61"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="478.182" result="effect1_foregroundBlur_186_1134" />
          </filter>
          <filter
            id="filter2_f_186_1134"
            x="426.762"
            y="-452.424"
            width="1622.63"
            height="1716.67"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="79.6969" result="effect1_foregroundBlur_186_1134" />
          </filter>
          <linearGradient
            id="paint0_linear_186_1134"
            x1="35.0676"
            y1="23.6807"
            x2="903.8"
            y2="632.086"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="hsl(var(--foreground))" stop-opacity="0" />
            <stop offset="1" stop-color="hsl(var(--muted-foreground))" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_186_1134"
            x1="1118.08"
            y1="-149.03"
            x2="1118.08"
            y2="1248.85"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="hsl(var(--foreground))" />
            <stop offset="0.578125" stop-color="hsl(var(--primary-light))" />
            <stop offset="1" stop-color="hsl(var(--primary))" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_186_1134"
            x1="1238.08"
            y1="-293.03"
            x2="1238.08"
            y2="1104.85"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="hsl(var(--foreground))" />
            <stop offset="0.578125" stop-color="hsl(var(--primary-light))" />
            <stop offset="1" stop-color="hsl(var(--primary))" />
          </linearGradient>
          <clipPath id="clip0_186_1134">
            <rect width="1220" height="810" rx="16" fill="hsl(var(--foreground))" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <div class="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-2xl md:max-w-3xl lg:max-w-4xl mt-16 md:mt-[120px] lg:mt-[160px] px-4 w-full">
      <h1 class="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
        {{ t('hero.title') }}
      </h1>
      <p class="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
        {{ t('hero.description') }}
      </p>
    </div>

    <NuxtLink :to="localePath('/register')" class="relative z-10">
      <Button class="bg-secondary text-secondary-foreground hover:bg-secondary/95 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10 transition-all duration-200">
        {{ t('hero.signupButton') }}
      </Button>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n, useLocalePath } from '#imports'
import Button from '~/components/ui/Button.vue'

const { t } = useI18n()
const localePath = useLocalePath()

// Generate grid rectangles
const gridRects = computed(() => {
  const rects: Array<{ x: number; y: number }> = []
  const rows = [9.2, 45.2, 81.2, 117.2, 153.2, 189.2, 225.2, 261.2, 297.2, 333.2, 369.2, 405.2, 441.2, 477.2, 513.2, 549.2, 585.2, 621.2, 657.2, 693.2, 729.2, 765.2]
  
  for (let i = 0; i < 35; i++) {
    const x = -20.0891 + i * 36
    for (const y of rows) {
      rects.push({ x, y })
    }
  }
  
  return rects
})
</script>
