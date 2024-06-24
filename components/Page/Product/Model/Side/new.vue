<template>
  <ElError v-if="!data" />
  <CardSide v-else :class="'card-bordered '" v-for="item in data">
    <figure class="w-1/3">
      <img
        alt="Related product"
        :src="item.Product?.image ?? 'https://picsum.photos/300 '"
        class="w-full h-36 object-cover"
      />
    </figure>
    <CardBody class="w-2/3">
      <ElError v-if="!item.Product" />
      <PageProductModelDescTrolly
        v-else
        :side="true"
        :data="item"
        v-model:detail="detail"
      />
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup>
defineProps<{ data: TollyProps["Box"] }>()
const detail = ref<boolean>(false)
</script>
