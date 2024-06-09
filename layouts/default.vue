<script setup lang="ts">
const { getMultiCon } = useStyle()
</script>

<template>
  <!-- data-theme="cyberpunk" -->
  <section class="min-h-screen bg-base-300 w-screen">
    <ElNav
      :class="
        getMultiCon({
          array: ['shop', 'product', 'home'],
          con1: 'hidden',
          con2: '',
        })
      "
    />
    <ElNavShop
      :class="`
      ${getMultiCon({
        array: ['shop', 'product', 'home'],
        con1: '',
        con2: 'hidden',
      })}
       `"
    />
    <div class="flex">
      <ElSide
        :class="
          getMultiCon({
            array: ['shop', 'sell', 'home'],
            con1: 'hidden ',
            con2: ' hidden md:block',
          })
        "
      />
      <main class="container mx-auto mt-3 mb-20 md:mb-10 min-h-screen">
        <slot />
        <ElNavBottom class="fixed" />
      </main>
    </div>
  </section>
</template>
