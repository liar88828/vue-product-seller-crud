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
              v-model:input="store.data.email"
              types="email"
              :title="'Email'"
              :err="store.error.email"
            />
            <ElInput
              v-model:input="store.data.password"
              types="password"
              :title="'Password'"
              :err="store.error.password"
            />
            <!--            Link-->
            <div class="flex md:flex-row flex-col my-1 gap-1">
              <p>
                <span> Don't have an account? </span>
                <NuxtLink to="/auth/sign-up" :class="['link link-primary']">
                  Sign Up
                </NuxtLink>
              </p>
              <p class="md:text-end">
                <NuxtLink to="/auth/forgot" class="link link-primary">
                  Forgot Password?
                </NuxtLink>
              </p>
            </div>

            <!--button-->
            <div class="flex flex-col gap-2 mt-4">
              <button
                type="submit"
                :class="[
                  'btn btn-primary',
                  // store.pending && 'btn-disabled'
                ]"
              >
                <ElLoading v-if="store.pending" />
                <span v-else>Sign In</span>
              </button>

              <p class="text-error text-lg text-center">
                {{ store.msg }}
              </p>
            </div>
          </form>

          <ElDivider title="Or With" />
          <div class="flex flex-col gap-2">
            <NuxtLink to="/api/auth/google" class="btn btn-primary btn-outline">
              <IconsGoogle />
              Sign in with Google
            </NuxtLink>
            <NuxtLink to="/api/auth/github" class="btn btn-primary btn-outline">
              <IconsGithub />
              Sign in with GitHub
            </NuxtLink>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
  {{ store }}
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
  middleware: "auth",
})

// const { clear, fetch, loggedIn, session, user, signIn } = useAuthStore()
const { store, handleSubmit } = useSignIn()
</script>
