<template>
  <section class="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
    <div class="text-center text-gray-300 text-sm font-medium leading-tight">
      Trusted by fast-growing startups
    </div>
    <div class="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
      <img
        v-for="i in 8"
        :key="i"
        :src="`/logos/logo0${i}.svg`"
        :alt="`Company Logo ${i}`"
        width="400"
        height="120"
        class="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
      />
    </div>
  </section>
</template>

