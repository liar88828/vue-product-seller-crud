<template>
  <ClientOnly>
    <div ref="refImage" class="profile-edit">
      <CardInit>
        <div class="flex justify-between items-center">
          <div class="space-y-2">
            <p>
              title
              <input class="text-3xl font-bold" v-model="data.name" />
            </p>
            <p>
              industry
              <input v-model="data.industry" />
            </p>
          </div>
        </div>
        <div class="grid gap-6 md:grid-cols-2 mt-5 w-full">
          <div class="space-y-5">
            <div class="flex items-start gap-4">
              <IconsLocation />
              <div class="">
                <h3 class="font-medium">Address</h3>
                <textarea v-model="data.address"></textarea>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <IconsIndustry />
              <div>
                <h3 class="font-medium">Industry</h3>
                <input type="text" v-model="data.industry" />
              </div>
            </div>
            <!-- <div class="flex items-start gap-4">
              <IconsPhone />
              <div>
                <h3 class="font-medium">Phone</h3>
                <input type="text" v-model="data.Contact.phone" />
              </div>
            </div>
            <div class="flex items-start gap-4">
              <IconsMail />
              <div>
                <h3 class="font-medium">Email</h3>
                <input type="text" v-model="data.Contact.email" />
              </div>
            </div>
            <div class="flex items-start gap-4">
              <IconsGlobe />
              <div>
                <h3 class="font-medium">Website</h3>
                <input type="text" v-model="data.Contact.website" />
              </div> -->
            <!-- </div> -->
            <!-- <div class="flex items-start gap-4">
              <IconsShare />
              <div class="grid gap-2">
                <h3 class="font-medium">Social Media</h3>
                <div class="flex flex-col gap-3">
                  <div class="flex flex-nowrap items-center gap-2">
                    <IconsFacebook class="h-8 w-8" />
                    <input type="text" v-model="data.facebook" />
                  </div>
                  <div class="flex flex-nowrap items-center gap-2">
                    <IconsInstagram class="h-8 w-8" />
                    <input type="text" v-model="data.instagram" />
                  </div>
                  <div
                    class="flex flex-nowrap items-center gap-2"
                    :href="data.twitter"
                  >
                    <IconsTwitter class="h-8 w-8" />
                    <input type="text" v-model="data.twitter" />
                  </div>
                  <div
                    class="flex flex-nowrap items-center gap-2"
                    :href="data.whatsapp"
                  >
                    <IconsWhatsapp class="h-8 w-8" />
                    <input type="text" v-model="data.whatsapp" />
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <div class="space-y-5">
            <div class="w-full">
              <h3 class="font-medium">About {{ data.name }}</h3>
              <textarea v-model="data.description"> </textarea>
            </div>
            <div>
              <h3 class="font-medium">Our Vision</h3>
              <textarea v-model="data.vision"></textarea>
            </div>
            <div>
              <h3 class="font-medium">Our Mission</h3>
              <textarea v-model="data.mission"></textarea>
            </div>
            <div>
              <h3 class="font-medium">Company History</h3>
              <textarea v-model="data.history"></textarea>
            </div>
          </div>
        </div>

        <CardAction>
          <button
            @click="() => updateMarket(store.market)"
            class="btn btn-info"
          >
            Save
          </button>
          <NuxtLink class="btn btn-info btn-outline" to="/market/profile">
            Back
          </NuxtLink>
        </CardAction>
      </CardInit>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: MarketClient
}>()

const { updateMarket, updateStore } = useMarket()
const store = updateStore(props.data)
</script>
