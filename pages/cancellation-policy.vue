<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 bg-white">
      <div class="max-w-4xl mx-auto px-6 pt-24 pb-16">
      <div class="mb-8">
          <h1 class="text-4xl font-bold mb-4 text-gray-900">Cancellation Policy</h1>
          <p class="text-gray-600">Last updated: {{ new Date().toLocaleDateString() }}</p>
      </div>

      <div class="prose prose-slate max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">1. Overview</h2>
          <p class="text-gray-900/90 mb-4">
            This Cancellation Policy outlines the terms and conditions for canceling subscriptions, bookings, and services provided 
            by Shace. Please read this policy carefully before making any cancellations.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">2. Subscription Cancellations</h2>
          <h3 class="text-xl font-medium mb-3 text-gray-900">2.1 Monthly Subscriptions</h3>
          <p class="text-gray-900/90 mb-4">
            You may cancel your monthly subscription at any time. Cancellations will take effect at the end of your current billing 
            period. You will continue to have access to the Service until the end of the paid period.
          </p>

          <h3 class="text-xl font-medium mb-3 text-gray-900">2.2 Annual Subscriptions</h3>
          <p class="text-gray-900/90 mb-4">
            Annual subscriptions can be canceled at any time. If you cancel within the first 30 days, you may be eligible for a 
            prorated refund. After 30 days, cancellations will take effect at the end of your current annual billing period, 
            and no refunds will be provided.
          </p>

          <h3 class="text-xl font-medium mb-3 text-gray-900">2.3 How to Cancel</h3>
          <p class="text-gray-900/90 mb-4">
            To cancel your subscription, you can:
          </p>
          <ul class="list-disc pl-6 mb-4 text-gray-900/90">
            <li>Log into your account and navigate to the Billing section</li>
            <li>Click "Cancel Subscription" and follow the prompts</li>
            <li>Contact our support team at support@shace.com</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">3. Space Booking Cancellations</h2>
          <h3 class="text-xl font-medium mb-3 text-gray-900">3.1 Cancellation Timeframes</h3>
          <p class="text-gray-900/90 mb-4">
            Space booking cancellations are subject to the following terms:
          </p>
          <ul class="list-disc pl-6 mb-4 text-gray-900/90">
            <li><strong>More than 48 hours before:</strong> Full refund or credit</li>
            <li><strong>24-48 hours before:</strong> 50% refund or credit</li>
            <li><strong>Less than 24 hours before:</strong> No refund, credit may be available at our discretion</li>
            <li><strong>No-show:</strong> No refund or credit</li>
          </ul>

          <h3 class="text-xl font-medium mb-3 text-gray-900">3.2 How to Cancel a Booking</h3>
          <p class="text-gray-900/90 mb-4">
            To cancel a space booking:
          </p>
          <ul class="list-disc pl-6 mb-4 text-gray-900/90">
            <li>Log into your account and go to "My Bookings"</li>
            <li>Select the booking you wish to cancel</li>
            <li>Click "Cancel Booking" and confirm</li>
            <li>Contact support if you need assistance</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">4. Refund Policy</h2>
          <h3 class="text-xl font-medium mb-3 text-gray-900">4.1 Refund Processing</h3>
          <p class="text-gray-900/90 mb-4">
            Refunds, when applicable, will be processed to the original payment method within 5-10 business days. Processing times 
            may vary depending on your payment provider.
          </p>

          <h3 class="text-xl font-medium mb-3 text-gray-900">4.2 Non-Refundable Items</h3>
          <p class="text-gray-900/90 mb-4">
            The following are non-refundable:
          </p>
          <ul class="list-disc pl-6 mb-4 text-gray-900/90">
            <li>Services already rendered or consumed</li>
            <li>Setup fees</li>
            <li>Custom development work</li>
            <li>Third-party service fees</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">5. Credit Policy</h2>
          <p class="text-gray-900/90 mb-4">
            In lieu of refunds, we may offer account credits that can be used for future bookings or services. Credits are valid 
            for 12 months from the date of issuance and cannot be transferred or exchanged for cash.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">6. Special Circumstances</h2>
          <h3 class="text-xl font-medium mb-3 text-gray-900">6.1 Force Majeure</h3>
          <p class="text-gray-900/90 mb-4">
            In cases of force majeure (natural disasters, pandemics, government actions, etc.), we will work with you to provide 
            appropriate accommodations, which may include full refunds or credits.
          </p>

          <h3 class="text-xl font-medium mb-3 text-gray-900">6.2 Service Interruptions</h3>
          <p class="text-gray-900/90 mb-4">
            If our Service is unavailable for an extended period due to technical issues on our end, we will provide appropriate 
            compensation, which may include service credits or refunds.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">7. Account Deletion</h2>
          <p class="text-gray-900/90 mb-4">
            You may request account deletion at any time. Account deletion will:
          </p>
          <ul class="list-disc pl-6 mb-4 text-gray-900/90">
            <li>Cancel any active subscriptions</li>
            <li>Cancel any pending bookings</li>
            <li>Permanently delete your account and associated data (subject to our data retention policies)</li>
            <li>Not entitle you to refunds for services already rendered</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">8. Changes to Cancellation Policy</h2>
          <p class="text-gray-900/90 mb-4">
            We reserve the right to modify this Cancellation Policy at any time. Material changes will be communicated to users 
            via email or through the Service. Continued use of the Service after changes constitutes acceptance of the modified policy.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">9. Contact Us</h2>
          <p class="text-gray-900/90 mb-4">
            If you have questions about cancellations or need assistance, please contact us:
          </p>
          <p class="text-gray-900/90">
            <strong>Email:</strong> support@shace.com<br>
            <strong>Phone:</strong> [Your Support Phone Number]<br>
            <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM [Your Timezone]
          </p>
        </section>
      </div>
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import FooterSection from '~/components/FooterSection.vue'

definePageMeta({
  layout: false
})

useHead({
  title: 'Cancellation Policy - Shace',
  meta: [
    { name: 'description', content: 'Shace Cancellation Policy - Learn about our cancellation and refund policies.' },
    { property: 'og:title', content: 'Cancellation Policy - Shace' },
    { property: 'og:description', content: 'Shace Cancellation Policy - Learn about our cancellation and refund policies.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Cancellation Policy - Shace' },
    { name: 'twitter:description', content: 'Shace Cancellation Policy - Learn about our cancellation and refund policies.' }
  ]
})
</script>

