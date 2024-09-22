<template>
  <div class="">
    <PageProductTitle :title="'New Products'">
      <button @click="() => {}" class="btn btn-sm">See more</button>
    </PageProductTitle>
    <div class="flex flex-row gap-2 overflow-x-auto">
      <PageProductItem
        v-for="item in dataProducts"
        :data="item"
        :isFlex="true"
      />
    </div>
  </div>
</template>
