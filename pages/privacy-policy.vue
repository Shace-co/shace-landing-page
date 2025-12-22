<template>
  <div class="bg-white w-full">
    <div class="max-w-4xl mx-auto px-6 pt-24 pb-16">
      <div class="mb-8">
        <NuxtLink to="/" class="text-primary hover:underline mb-4 inline-block">
          ← Back to Home
        </NuxtLink>
        <h1 class="text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
        <p class="text-gray-600">Last updated: {{ new Date().toLocaleDateString() }}</p>
      </div>

      <div class="prose prose-slate max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
          <p class="text-gray-700 mb-4">
            Welcome to Shace ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our space management 
            platform and services.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>
          <h3 class="text-xl font-medium mb-3 text-gray-900">2.1 Information You Provide</h3>
          <ul class="list-disc pl-6 mb-4 text-gray-700">
            <li>Account information (name, email address, phone number)</li>
            <li>Company information (company name, address, business details)</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Space booking and reservation data</li>
            <li>Communication preferences</li>
          </ul>

          <h3 class="text-xl font-medium mb-3 text-gray-900">2.2 Automatically Collected Information</h3>
          <ul class="list-disc pl-6 mb-4 text-gray-700">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage data (pages visited, features used, time spent)</li>
            <li>Location data (if enabled and permitted)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
          <p class="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul class="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">4. Information Sharing and Disclosure</h2>
          <p class="text-gray-700 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
          <ul class="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>With Your Consent:</strong> When you have given us explicit permission</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">5. Data Security</h2>
          <p class="text-gray-700 mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information. 
            However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee 
            absolute security.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">6. Your Rights</h2>
          <p class="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
          <ul class="list-disc pl-6 mb-4 text-gray-700">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">7. Cookies and Tracking Technologies</h2>
          <p class="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our platform and hold certain information. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">8. Children's Privacy</h2>
          <p class="text-gray-700 mb-4">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
            from children. If you become aware that a child has provided us with personal information, please contact us.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">9. Changes to This Privacy Policy</h2>
          <p class="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
            on this page and updating the "Last updated" date.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900">10. Contact Us</h2>
          <p class="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p class="text-gray-700">
            <strong>Email:</strong> privacy@shace.com<br>
            <strong>Address:</strong> [Your Company Address]
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Privacy Policy - Shace',
  meta: [
    { name: 'description', content: 'Shace Privacy Policy - Learn how we collect, use, and protect your personal information.' },
    { property: 'og:title', content: 'Privacy Policy - Shace' },
    { property: 'og:description', content: 'Shace Privacy Policy - Learn how we collect, use, and protect your personal information.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Privacy Policy - Shace' },
    { name: 'twitter:description', content: 'Shace Privacy Policy - Learn how we collect, use, and protect your personal information.' }
  ]
})
</script>

