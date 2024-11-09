<template>
  <div ref="refImage">
    <CardInit>
      <div class="flex justify-between items-center">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold">{{ data.name }}</h1>
          <p class="text-gray-500 dark:text-gray-400">
            {{ data.industry }}
          </p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 mt-5">
        <div class="space-y-5">
          <!--  -->
          <section class="flex items-start gap-4">
            <IconsLocation />
            <div>
              <h3 class="font-medium">Address</h3>
              <p>
                {{ data.address }}
              </p>
            </div>
          </section>

          <section class="flex items-start gap-4">
            <IconsIndustry />
            <div>
              <h3 class="font-medium">Industry</h3>
              <p>{{ data.industry }}</p>
            </div>
          </section>
          <!--  -->
          <!-- <ElError v-if="!resContact" />
          <Contact v-else :data="resContact.contact" /> -->
          <!--  -->
          <!-- <ElError v-if="!resSocial" />
          <Social v-else :data="resSocial.social" /> -->
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

      <div class="flex gap-2">
        <NuxtLink to="/market/profile/edit" class="btn btn-primary"
          >Edit
        </NuxtLink>
        <button @click="() => clickImage" class="btn btn-info">Save</button>
      </div>
    </CardInit>
  </div>
</template>

<script lang="ts" setup>
// import Contact from "./Contact.vue"
// import Social from "./Social.vue"

// const { data: resContact } = await useFetch("/api/market/profile/info/contact")
// const { data: resSocial } = await useFetch("/api/market/profile/info/social")
// const { data: resAdditional } = await useFetch("/api/market/profile/info/additional")

defineProps<{ data: MarketClient }>()

const { clickImage, refImage } = useImages("Market Profile")
</script>
