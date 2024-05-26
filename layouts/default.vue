<script setup lang="ts">
const { getMultiCon } = useStyle()
</script>

<template>
  <section data-theme="cyberpunk" class="min-h-screen bg-base-300 w-screen">
    <MainHeadNavigator
      :class="
        getMultiCon({
          array: ['shop', 'product'],
          con1: 'hidden',
          con2: '',
        })
      "
    />
    <MainHeadShop
      :class="
        getMultiCon({
          array: ['shop', 'product'],
          con1: '',
          con2: 'hidden',
        })
      "
    />
    <div class="flex">
      <MainBodySidebar
        :class="
          getMultiCon({
            array: ['shop', 'sell'],
            con1: 'hidden ',
            con2: ' hidden md:block',
          })
        "
      />
      <main class="container mx-auto mt-2 pb-20">
        <slot />
        <MainBottomNavigator />
      </main>
    </div>
  </section>
</template>
