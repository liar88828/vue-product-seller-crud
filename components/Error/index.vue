<template>
  <div>
    <template v-if="error?.statusCode === 404">
      <h1>{{ error?.statusCode }}</h1>
      <p>Sorry, that page doesn't exist.</p>
    </template>
    <template v-else>
      <h1>Dang</h1>
      <p>
        <strong>{{ error?.message }}</strong>
      </p>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>
    </template>
    <p>
      Go back to your
      <a @click="handleError"> dashboard. </a>
    </p>
  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{ error: NuxtError<any> | null }>()

const handleError = () => {
  clearError({
    redirect: "/",
  })
}
</script>
