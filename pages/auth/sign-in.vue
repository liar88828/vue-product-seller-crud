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

          <form @submit.prevent="handleSubmit">
            <ElInput
              v-model:input="store.email"
              types="email"
              :title="'Email'"
              :err="errStore.data.email"
            />
            <ElInput
              v-model:input="store.password"
              types="password"
              :title="'Password'"
              :err="errStore.data.password"
            />
            <div class="flex flex-nowrap gap-2">
              <NuxtLink to="/auth/forgot" class="link link-primary">
                Forgot Password?
              </NuxtLink>
            </div>
            <div class="flex flex-col gap-2 mt-4">
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
          </form>

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
import { useSignIn } from "~/composables/auth/useSignIn"

definePageMeta({
  layout: "auth",
})

const { errStore, store, handleSubmit } = useSignIn()
</script>
