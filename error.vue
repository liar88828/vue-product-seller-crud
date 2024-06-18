<script setup>
const error = useError()

const handleError = () => {
  clearError({
    redirect: "/",
  })
}
</script>
<template>
  <NuxtLayout>
    <div class="mt-32">
      <CardCompact class="prose p-10 bg-base-100/95">
        <div class="items-center flex justify-between my-5">
          <CardTitle>Go back to your</CardTitle>
          <button @click="handleError" class="btn">Home</button>
        </div>
        <!-- @vue-expect-error -->
        <template v-if="error.statusCode === 404">
          <!-- <h1>404!</h1>
        <p>Sorry, that page doesn't exist.</p> -->
          <ErrorData
            :code="error.statusCode"
            :link="{
              back: '/',
              resolve: {
                link: '/market/create',
                text: 'Create Market',
              },
            }"
            :message="error.message"
          />
        </template>
        <template v-else>
          <h1>Dang</h1>
          {{ error.statusCode }}
          <p>
            <!-- @vue-expect-error -->
            <strong>{{ error.message }}</strong>
          </p>
          <p>It looks like something broke.</p>
          <p>Sorry about that.</p>
        </template>
      </CardCompact>
    </div>
  </NuxtLayout>
</template>
