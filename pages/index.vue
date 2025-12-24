<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="relative overflow-x-hidden pb-0 pt-0 flex-1">
      <div class="relative z-10">
        <!-- Hero Section - Full Width Background -->
        <div class="w-full">
          <HeroSection />
        </div>
        <!-- Dashboard Preview Wrapper -->
        <div class="max-w-[1320px] mx-auto relative px-4 md:px-6">
          <div class="absolute bottom-[-100px] md:bottom-[-180px] lg:bottom-[-200px] left-1/2 transform -translate-x-1/2 z-0 w-full max-w-full px-0">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </div>
      </div>
      <!-- Trusted Partners Section - Moved below dashboard -->
      <AnimatedSection class="relative z-20 max-w-[1320px] mx-auto px-4 md:px-6 mt-[200px] sm:mt-[250px] md:mt-[300px] lg:mt-[350px]" :delay="0.1">
        <SocialProof />
      </AnimatedSection>
      <AnimatedSection id="features-section" class="relative z-20 max-w-[1320px] mx-auto px-4 md:px-6 mt-8" :delay="0.2">
        <BentoSection />
      </AnimatedSection>
      <AnimatedSection class="relative z-20 max-w-[1320px] mx-auto px-4 md:px-6 mt-6 md:mt-8" :delay="0.2">
        <LargeTestimonial />
      </AnimatedSection>
      <AnimatedSection
        id="pricing-section"
        class="relative z-20 max-w-[1320px] mx-auto px-4 md:px-6 mt-6 md:mt-8"
        :delay="0.2"
      >
        <PricingSection />
      </AnimatedSection>
      <AnimatedSection
        id="testimonials-section"
        class="relative z-20 max-w-[1320px] mx-auto px-4 md:px-6 mt-6 md:mt-8"
        :delay="0.2"
      >
        <TestimonialGridSection />
      </AnimatedSection>
      <AnimatedSection id="faq-section" class="relative z-20 max-w-[1320px] mx-auto px-4 md:px-6 mt-6 md:mt-8" :delay="0.2">
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection class="relative z-20 max-w-[1320px] mx-auto px-4 md:px-6 mt-6 md:mt-8" :delay="0.2">
        <CTASection />
      </AnimatedSection>
    </div>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import DashboardPreview from '~/components/DashboardPreview.vue'
import SocialProof from '~/components/SocialProof.vue'
import BentoSection from '~/components/BentoSection.vue'
import LargeTestimonial from '~/components/LargeTestimonial.vue'
import PricingSection from '~/components/PricingSection.vue'
import TestimonialGridSection from '~/components/TestimonialGridSection.vue'
import FAQSection from '~/components/FAQSection.vue'
import CTASection from '~/components/CTASection.vue'
import AnimatedSection from '~/components/AnimatedSection.vue'
import Header from '~/components/Header.vue'
import FooterSection from '~/components/FooterSection.vue'

definePageMeta({
  layout: 'default',
})
</script>

