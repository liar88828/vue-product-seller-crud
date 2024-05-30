<template>
  <CardSide :class="''">
    <figure class="w-1/3">
      <img
        alt="Related product"
        :src="'https://picsum.photos/300 '"
        class="w-full h-36 object-cover"
      />
    </figure>
    <CardBody class="w-2/3">
      <slot />
    </CardBody>
  </CardSide>
</template>

<script lang="ts" setup></script>
