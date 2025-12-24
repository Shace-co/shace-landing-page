<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 bg-white">
      <div class="max-w-4xl mx-auto px-6 pt-24 pb-16">
      <div class="mb-8">
          <h1 class="text-4xl font-bold mb-4 text-gray-900">Terms and Conditions</h1>
          <p class="text-gray-600">Last updated: {{ new Date().toLocaleDateString() }}</p>
      </div>

      <div class="prose prose-slate max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">1. Agreement to Terms</h2>
          <p class="text-gray-900/90 mb-4">
            By accessing or using Shace's space management platform ("Service"), you agree to be bound by these Terms and Conditions 
            ("Terms"). If you disagree with any part of these terms, you may not access the Service.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">2. Description of Service</h2>
          <p class="text-gray-900/90 mb-4">
            Shace provides a digital platform for space management, including but not limited to:
          </p>
          <ul class="list-disc pl-6 mb-4 text-gray-900/90">
            <li>Office space booking and reservation management</li>
            <li>Space utilization analytics and reporting</li>
            <li>Payment processing for space rentals</li>
            <li>Visitor and employee management</li>
            <li>Integration with third-party services</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">3. User Accounts</h2>
          <h3 class="text-xl font-medium mb-3 text-gray-900">3.1 Account Creation</h3>
          <p class="text-gray-900/90 mb-4">
            To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and 
            complete information during registration and to update such information to keep it accurate, current, and complete.
          </p>

          <h3 class="text-xl font-medium mb-3 text-gray-900">3.2 Account Security</h3>
          <p class="text-gray-900/90 mb-4">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur 
            under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">4. Acceptable Use</h2>
          <p class="text-gray-900/90 mb-4">You agree not to:</p>
          <ul class="list-disc pl-6 mb-4 text-gray-900/90">
            <li>Use the Service for any illegal purpose or in violation of any laws</li>
            <li>Transmit any harmful code, viruses, or malicious software</li>
            <li>Attempt to gain unauthorized access to the Service or related systems</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Use the Service to harass, abuse, or harm others</li>
            <li>Impersonate any person or entity</li>
            <li>Collect or store personal data about other users without permission</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">5. Payment Terms</h2>
          <h3 class="text-xl font-medium mb-3 text-gray-900">5.1 Fees</h3>
          <p class="text-gray-900/90 mb-4">
            Certain features of the Service may require payment. You agree to pay all fees associated with your use of the Service 
            in accordance with our pricing plans.
          </p>

          <h3 class="text-xl font-medium mb-3 text-gray-900">5.2 Billing</h3>
          <p class="text-gray-900/90 mb-4">
            Fees are billed in advance on a monthly or annual basis, as selected. All fees are non-refundable except as required by law.
          </p>

          <h3 class="text-xl font-medium mb-3 text-gray-900">5.3 Price Changes</h3>
          <p class="text-gray-900/90 mb-4">
            We reserve the right to change our pricing at any time. We will provide notice of any price changes at least 30 days 
            in advance.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">6. Intellectual Property</h2>
          <p class="text-gray-900/90 mb-4">
            The Service and its original content, features, and functionality are owned by Shace and are protected by international 
            copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">7. User Content</h2>
          <p class="text-gray-900/90 mb-4">
            You retain ownership of any content you submit, post, or display on or through the Service. By submitting content, you 
            grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute such content for the purpose 
            of providing and improving the Service.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">8. Termination</h2>
          <p class="text-gray-900/90 mb-4">
            We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, 
            including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">9. Disclaimer of Warranties</h2>
          <p class="text-gray-900/90 mb-4">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING 
            BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">10. Limitation of Liability</h2>
          <p class="text-gray-900/90 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHACE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
            OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">11. Governing Law</h2>
          <p class="text-gray-900/90 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its 
            conflict of law provisions.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">12. Changes to Terms</h2>
          <p class="text-gray-900/90 mb-4">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the 
            new Terms on this page and updating the "Last updated" date.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">13. Contact Information</h2>
          <p class="text-gray-900/90 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p class="text-gray-900/90">
            <strong>Email:</strong> legal@shace.com<br>
            <strong>Address:</strong> [Your Company Address]
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
  title: 'Terms and Conditions - Shace',
  meta: [
    { name: 'description', content: 'Shace Terms and Conditions - Read our terms of service for using the Shace platform.' },
    { property: 'og:title', content: 'Terms and Conditions - Shace' },
    { property: 'og:description', content: 'Shace Terms and Conditions - Read our terms of service for using the Shace platform.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Terms and Conditions - Shace' },
    { name: 'twitter:description', content: 'Shace Terms and Conditions - Read our terms of service for using the Shace platform.' }
  ]
})
</script>

