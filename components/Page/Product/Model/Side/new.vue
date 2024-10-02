<template>
  <CardSide :class="'card-bordered '">
    <figure class="w-1/3">
      <img
        alt="Related product"
        :src="item.Product.image ?? 'https://picsum.photos/300 '"
        class="w-full h-36 object-cover"
      />
    </figure>
    <CardBody class="w-2/3">
      <PageProductModelDescTrolly
        :side="true"
        :data="item"
        v-model:detail="detail"
      />
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup>
defineProps<{ item: TrolleyProduct }>()
const detail = ref<boolean>(false)
</script>
