<template>
  <!--
// v0 by Vercel.
// https://v0.dev/t/go7HyHEA5ur
-->

  <main class="card bg-base-100" ref="refImage">
    <div class="card-body">
      <div class="flex justify-between items-center gap-5">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold">{{ data.name }}</h1>
          <p class="text-gray-500 dark:text-gray-400">
            {{ data.industry }}
          </p>
        </div>
        <button @click="() => clickImage" class="btn btn-info">Save</button>
      </div>

      <div class="grid gap-6 md:grid-cols-2 mt-5">
        <div class="space-y-5">
          <div class="flex items-start gap-4">
            <IconsLocation />
            <div>
              <h3 class="font-medium">Address</h3>
              <p>
                {{ data.address }}
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <IconsIndustry />
            <div>
              <h3 class="font-medium">Industry</h3>
              <p>{{ data.industry }}</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <IconsPhone />
            <div>
              <h3 class="font-medium">Phone</h3>
              <p>+62 24 8643 2198</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <IconsMail />
            <div>
              <h3 class="font-medium">Email</h3>
              <p>info@orakgenah.com</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <IconsGlobe />
            <div>
              <h3 class="font-medium">Website</h3>
              <a class="text-blue-600 underline" href="#">
                {{ data.contact.website }}
              </a>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <IconsShare />
            <div class="grid gap-2">
              <h3 class="font-medium">Social Media</h3>
              <div class="flex flex-col gap-3">
                <a
                  class="flex flex-nowrap items-center gap-2"
                  :href="data.socialMedia.facebook"
                >
                  <IconsFacebook class="h-8 w-8" />
                  <span class="text-xs sm:text-lg">
                    {{ formatUrl(data.socialMedia.facebook) }}</span
                  >
                </a>
                <a
                  class="flex flex-nowrap items-center gap-2"
                  :href="data.socialMedia.instagram"
                >
                  <IconsInstagram class="h-8 w-8" />
                  <span class="text-xs sm:text-lg">
                    <!-- Instagram  -->
                    {{ formatUrl(data.socialMedia.instagram) }}
                  </span>
                </a>
                <a
                  class="flex flex-nowrap items-center gap-2"
                  :href="data.socialMedia.twitter"
                >
                  <IconsTwitter class="h-8 w-8" />
                  <span class="text-xs sm:text-lg">
                    <!-- Twitter -->
                    {{ formatUrl(data.socialMedia.twitter) }}
                  </span>
                </a>
                <a
                  class="flex flex-nowrap items-center gap-2"
                  :href="data.socialMedia.whatsapp"
                  ><IconsWhatsapp class="h-8 w-8" />
                  <span class="text-xs sm:text-lg">
                    <!-- Whatsapp -->
                    {{ formatUrl(data.socialMedia.whatsapp) }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-5">
          <div>
            <h3 class="font-medium">About {{ data.name }}</h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ data.description }}
            </p>
          </div>
          <div>
            <h3 class="font-medium">Our Vision</h3>
            <p class="text-gray-500 dark:text-gray-400">{{ data.vision }}</p>
          </div>
          <div>
            <h3 class="font-medium">Our Mission</h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ data.mission }}
            </p>
          </div>
          <div>
            <h3 class="font-medium">Company History</h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ data.history }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { dataCompany } from "~/assets/example/dataCompany"
const data = dataCompany
const { formatUrl } = useFormat()
const { clickImage, refImage } = useImage("Market Profile")
</script>
