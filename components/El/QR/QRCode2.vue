<template>
  <!-- @vue-skip -->
  <vue-qrcode v-if="qrValue" :value="qrValue" />
</template>

<script lang="ts">
//
// const props = defineProps<{ qrValue: string }>()
import VueQrcode from "vue-qrcode"

export default defineComponent({
  props: {
    qrValue: {
      type: String,
      default: "",
    },
  },
  components: {
    VueQrcode,
  },
})
</script>
