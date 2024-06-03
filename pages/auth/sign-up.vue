<template>
  <Card :compact="false">
    <CardBody>
      <PageAuthBack link="/auth/sign-in" />
      <div class="lg:flex gap-10">
        <figure class="lg:w-1/2">
          <NuxtImg src="/img/sign_up.svg" class="hidden lg:block" />
        </figure>

        <div class="lg:w-1/2">
          <div class="space-y-2">
            <h1 class="auth-h">Sign Up</h1>
            <p class="">Create account and choose favorite menu</p>
          </div>

          <form action="">
            <ElInput v-model:input="store.name" types="text" :title="'Name'" />
            <ElInput
              v-model:input="store.email"
              types="email"
              :title="'Email'"
            />
            <ElInput
              v-model:input="store.password"
              types="password"
              :title="'Password'"
            />
            <ElInput
              v-model:input="store.confPass"
              types="password"
              :title="'Conf Password'"
            />
          </form>

          <div class="flex flex-col gap-2 mt-4">
            <NuxtLink to="/auth/verify" class="btn btn-primary"
              >Sign Up</NuxtLink
            >
          </div>
          <div class="flex flex-nowrap gap-2">
            have a account?
            <NuxtLink to="/auth/sign-in" class="link link-primary">
              Sign In
            </NuxtLink>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
})

const store = reactive<{
  name: string
  email: string
  password: string
  confPass: string
}>({
  confPass: "",
  name: "",
  email: "",
  password: "",
})
</script>
