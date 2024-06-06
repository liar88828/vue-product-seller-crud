<template>
  <!-- @vue-skip -->
  <VueQrcode
    v-if="qrValue"
    :value="qrValue"
    :margin="4"
    :width="200"
    :color="{ dark: '#000000', light: '#ffffff' }"
    :quality="1"
    :type="'image/png'"
  />
</template>

<script lang="ts" setup>
import VueQrcode from "vue-qrcode"
defineProps<{ qrValue: string }>()
</script>
