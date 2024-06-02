<script setup lang="ts">
const { getMultiCon } = useStyle()
</script>

<template>
  <!-- data-theme="cyberpunk" -->
  <section class="min-h-screen bg-base-300 w-screen">
    <MainHeadNavigator
      :class="
        getMultiCon({
          array: ['shop', 'product', 'home'],
          con1: 'hidden',
          con2: '',
        })
      "
    />
    <!-- ${$route.path.includes('market') ? 'hidden' : ''} -->
    <MainHeadShop
      :class="`

      ${getMultiCon({
        array: ['shop', 'product', 'home'],
        con1: '',
        con2: 'hidden',
      })}
       `"
    />
    <div class="flex">
      <MainBodySidebar
        :class="
          getMultiCon({
            array: ['shop', 'sell', 'home'],
            con1: 'hidden ',
            con2: ' hidden md:block',
          })
        "
      />
      <main class="container mx-auto mt-5 mb-20 min-h-screen">
        <slot />
        <MainBottomNavigator class="fixed" />
      </main>
    </div>
  </section>
</template>
