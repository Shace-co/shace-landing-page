<template>
  <div class="min-h-screen relative overflow-hidden pb-0">
    <div class="relative z-10">
      <main class="max-w-[1320px] mx-auto relative">
        <HeroSection />
        <!-- Dashboard Preview Wrapper -->
        <div class="absolute bottom-[-150px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30">
          <AnimatedSection>
            <DashboardPreview />
          </AnimatedSection>
        </div>
      </main>
      <AnimatedSection class="relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-[400px]" :delay="0.1">
        <SocialProof />
      </AnimatedSection>
      <AnimatedSection id="features-section" class="relative z-10 max-w-[1320px] mx-auto mt-16" :delay="0.2">
        <BentoSection />
      </AnimatedSection>
      <AnimatedSection class="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" :delay="0.2">
        <LargeTestimonial />
      </AnimatedSection>
      <AnimatedSection
        id="pricing-section"
        class="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
        :delay="0.2"
      >
        <PricingSection />
      </AnimatedSection>
      <AnimatedSection
        id="testimonials-section"
        class="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
        :delay="0.2"
      >
        <TestimonialGridSection />
      </AnimatedSection>
      <AnimatedSection id="faq-section" class="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" :delay="0.2">
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection class="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" :delay="0.2">
        <CTASection />
      </AnimatedSection>
      <AnimatedSection class="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" :delay="0.2">
        <FooterSection />
      </AnimatedSection>
    </div>
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
import FooterSection from '~/components/FooterSection.vue'
import AnimatedSection from '~/components/AnimatedSection.vue'
</script>

