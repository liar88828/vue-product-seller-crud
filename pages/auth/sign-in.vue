<template>
  <Card :compact="false">
    <CardBody>
      <PageAuthBack link="/auth" />
      <div class="lg:flex lg:gap-10">
        <figure class="lg:w-1/2">
          <NuxtImg src="/img/sign_in.svg" class="hidden lg:block" />
        </figure>
        <div class="lg:w-1/2">
          <div class="space-y-2">
            <h1 class="auth-h">Sign In</h1>
            <p class="">Sign In to your account</p>
          </div>

          <form action="">
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
          </form>
          <div class="flex flex-nowrap gap-2">
            <NuxtLink to="/auth/forgot" class="link link-primary">
              Forgot Password?
            </NuxtLink>
          </div>
          <div class="flex flex-col gap-2 mt-4">
            <NuxtLink to="/home" class="btn btn-primary">Sign Up</NuxtLink>
          </div>
          <p>
            Don't have an account?
            <NuxtLink to="/auth/sign-up" class="link link-primary">
              Sign Up
            </NuxtLink>
          </p>
          <ElDivider title="Or With" />
          <div class="flex flex-col gap-2">
            <NuxtLink to="/auth/verify" class="btn btn-primary btn-outline"
              ><IconsGoogle /> Sign in with Google</NuxtLink
            >
            <NuxtLink to="/auth/verify" class="btn btn-primary btn-outline"
              ><IconsGithub />Sign in with GitHub</NuxtLink
            >
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
