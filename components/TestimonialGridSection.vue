<template>
  <section class="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
    <div class="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
      <div class="flex flex-col justify-start items-center gap-4">
        <h2 class="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
          Space management made effortless
        </h2>
        <p class="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
          Hear how businesses streamline operations, improve utilization,<br />
          and enhance experiences using Shace's powerful workspace management tools
        </p>
      </div>
    </div>
    <div class="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
      <div class="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
        <TestimonialCard v-bind="testimonials[0]" />
        <TestimonialCard v-bind="testimonials[1]" />
      </div>
      <div class="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
        <TestimonialCard v-bind="testimonials[2]" />
        <TestimonialCard v-bind="testimonials[3]" />
        <TestimonialCard v-bind="testimonials[4]" />
      </div>
      <div class="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
        <TestimonialCard v-bind="testimonials[5]" />
        <TestimonialCard v-bind="testimonials[6]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '~/components/TestimonialCard.vue'

const { getImagePath } = useLogoPath()

const testimonials = [
  {
    quote: "Shace has transformed how we manage our co-working spaces. The booking system is intuitive, and the analytics help us optimize space utilization. Our members love how easy it is to reserve workspaces.",
    name: "Annette Black",
    company: "Sony",
    avatar: getImagePath("/images/avatars/annette-black.png"),
    type: "large-teal",
  },
  {
    quote: "Integrating Shace with our existing access control was seamless. We went from manual check-ins to automated access management in days.",
    name: "Dianne Russell",
    company: "McDonald's",
    avatar: getImagePath("/images/avatars/dianne-russell.png"),
    type: "small-dark",
  },
  {
    quote: "The usage analytics feature has been a game changer. We're now making data-driven decisions about our workspace layout and seeing improved utilization rates.",
    name: "Cameron Williamson",
    company: "IBM",
    avatar: getImagePath("/images/avatars/cameron-williamson.png"),
    type: "small-dark",
  },
  {
    quote: "We no longer juggle multiple tools for bookings, access control, and team coordination. Shace brought everything together in one platform.",
    name: "Robert Fox",
    company: "MasterCard",
    avatar: getImagePath("/images/avatars/robert-fox.png"),
    type: "small-dark",
  },
  {
    quote: "We started with the free plan to test it out, but within a week we upgraded to Pro. Now, we can't imagine managing our workspace without it.",
    name: "Darlene Robertson",
    company: "Ferrari",
    avatar: getImagePath("/images/avatars/darlene-robertson.png"),
    type: "small-dark",
  },
  {
    quote: "Team coordination feels effortless now. With Shace's tools, scheduling and workspace management has become faster and more productive.",
    name: "Cody Fisher",
    company: "Apple",
    avatar: getImagePath("/images/avatars/cody-fisher.png"),
    type: "small-dark",
  },
  {
    quote: "Setting up Shace was not just simple, it felt seamless. We went from manual workspace management to a fully digitized system in days without worrying about complex configurations.",
    name: "Albert Flores",
    company: "Louis Vuitton",
    avatar: getImagePath("/images/avatars/albert-flores.png"),
    type: "large-light",
  },
]
</script>

