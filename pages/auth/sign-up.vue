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

          <form @submit.prevent="handleSubmit">
            <ElInput
              v-model:input="store.name"
              types="text"
              :title="'Name'"
              :err="errStore.data.name"
            />
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
            <ElInput
              v-model:input="store.confPass"
              types="password"
              :title="'Conf Password'"
              :err="errStore.data.confPass"
            />

            <div class="flex flex-nowrap gap-2 my-2">
              have a account?
              <NuxtLink to="/auth/sign-in" class="link link-primary">
                Sign In
              </NuxtLink>
            </div>

            <div class="flex flex-col gap-2 mt-4">
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </CardBody>
  </Card>
  <!-- {{ store }} -->
</template>

<script lang="ts" setup>
import { useSignUp } from "~/composables/auth/useSignUp"

definePageMeta({
  layout: "auth",
})
const { errStore, store, handleSubmit } = useSignUp()
</script>
