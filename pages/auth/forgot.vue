<template>
  <Card :compact="false">
    <CardBody>
      <div class="flex items-center justify-center">
        <NuxtImg src="/img/shopease-white.png" class="w-16 h-1w-16" />
        <h1 class="card-title">ShopEase</h1>
      </div>
      <div class="lg:flex lg:gap-10">
        <figure class="lg:w-1/2">
          <NuxtImg src="/img/forgot.svg" class="hidden lg:block" />
        </figure>
        <div class="lg:flex">
          <div class="">
            <div class="space-y-2">
              <h1 class="auth-h">Forgot Password</h1>
              <p class="">
                Select which account(s) should be reset your password
              </p>
            </div>
            <div class="w-full">
              <Card class="card-bordered hover:border-primary w-full">
                <CardBody>
                  <div class="flex gap-5">
                    <div class="btn btn-square btn-primary">
                      <IconsMail class="h-8 w-8" />
                    </div>
                    <div class="">
                      <CardTitle>Email</CardTitle>
                      Send to your Email
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card class="card-bordered hover:border-primary">
                <CardBody>
                  <div class="flex gap-5">
                    <div class="btn btn-square btn-primary">
                      <IconsWhatsapp class="h-8 w-8" />
                    </div>
                    <div class="">
                      <CardTitle>Whatsapp</CardTitle>
                      Send your whatsapp number
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div class="flex flex-col gap-2 mt-4">
              <NuxtLink to="/home" class="btn btn-primary">Continue</NuxtLink>
            </div>
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
