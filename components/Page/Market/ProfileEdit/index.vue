<template>
  <ClientOnly>
    <div ref="refImage" class="profile-edit">
      <CardInit>
        <Title :data="data.Market" />
        <div class="grid gap-6 md:grid-cols-2 mt-5 w-full">
          <Information :data="data">
            <Social :data="data.SocialMedia" />
          </Information>
          <Describe :data="data.Market" />
        </div>

        <CardAction>
          <button
            @click="() => handleUpdate(store.market)"
            class="btn btn-info"
          >
            Save
          </button>
          <NuxtLink class="btn btn-info btn-outline" to="/market/profile"
            >Back</NuxtLink
          >
        </CardAction>
      </CardInit>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import Information from "./Information.vue"
import Describe from "./Describe.vue"
import Social from "./Social.vue"
import Title from "./Title.vue"

const props = defineProps<{
  data: MarketServiceSingleClient
}>()

const { handleUpdate, store } = useProfile(props.data)
</script>
