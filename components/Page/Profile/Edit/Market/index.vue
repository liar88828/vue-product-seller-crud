<template>
  <div ref="refImage" class="profile-edit">
    <CardInit>
      <Title :data="data" />
      <div class="grid gap-6 md:grid-cols-2 mt-5 w-full">
        <Information :data="data">
          <Social :data="data" />
        </Information>
        <Describe :data="data" />
      </div>
      <button @click="handleSave" class="btn btn-info">Save</button>
    </CardInit>
  </div>
</template>

<script lang="ts" setup>
import Information from "./Information.vue"
import Describe from "./Describe.vue"
import Social from "./Social.vue"
import Title from "./Title.vue"

const props = defineProps<{
  data: MarketServerFull
}>()

const { handleSave, store } = useProfile(props.data)
</script>
