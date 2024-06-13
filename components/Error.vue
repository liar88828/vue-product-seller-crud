<!-- 2️⃣ The error.vue page is rendered -->
<template>
  <div>
    <!-- 4️⃣ We use the status code to determine what to show -->
    <template v-if="error?.statusCode === 404">
      <h1>{{ error?.statusCode }}</h1>
      <p>Sorry, that page doesn't exist.</p>
    </template>
    <template v-else>
      <h1>Dang</h1>
      <p>
        <!-- 4️⃣ We can also show the actual error message -->
        <strong>{{ error?.message }}</strong>
      </p>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>
    </template>
    <p>
      Go back to your
      <!-- 5️⃣ Handle the error for the user -->
      <a @click="handleError"> dashboard. </a>
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ error: NuxtError }>()

const handleError = () => {
  clearError({
    redirect: "/",
  })
}
</script>
