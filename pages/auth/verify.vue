<template>
  <Card :compact="false" class="lg:h-[50rem]">
    <CardBody class="flex items-center">
      <PageAuthBack link="/auth/sign-up" />
      <!--  -->
      <div class="lg:flex gap-5 justify-between h-full">
        <figure class="lg:w-1/2">
          <NuxtImg src="/img/otp.svg" class="hidden lg:inline" />
        </figure>
        <div class="lg:1/2 flex flex-col justify-center">
          <div class="text-center space-y-2">
            <h1 class="auth-h">Verify Your Email</h1>
            <p>Please enter the code on just sent to your email</p>
            <h2 class="text-lg font-medium">asdas</h2>
          </div>

          <form @submit.prevent="handleSubmit" class="my-3">
            <div class="flex space-x-2 justify-between">
              <input
                v-for="(item, index) in otp"
                :key="index"
                type="text"
                maxlength="1"
                v-model="otp[index]"
                @input="handleInput($event, index)"
                class="text-lg w-10 h-10 text-center font-semibold rounded input input-primary input-xs"
              />
              <!-- @focus="$event.target.select()" -->
            </div>

            <div class="flex flex-col gap-2 mt-4">
              <button type="submit" class="btn btn-primary">Verify</button>
              <div class="">
                <div>
                  <p class="text-justify">
                    If you don't receive an email, please check your spam
                    folder?
                    <button
                      @click="handlerResendOTP"
                      type="button"
                      class="link link-primary"
                    >
                      Resend
                    </button>
                  </p>
                </div>

                <p class="mt-8">
                  Time remaining:
                  <span class="badge badge-primary"> 00:00 </span>
                </p>
              </div>
            </div>
            <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
          </form>
        </div>
      </div>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
})
const { session } = useUserSession()
const otp = ref<string[]>(Array(6).fill(""))
const error = ref<string>("")

const handleInput = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement
  if (isNaN(Number(target.value))) return
  otp.value.splice(index, 1, target.value)

  // Focus next input
  if (target.nextElementSibling) {
    ;(target.nextElementSibling as HTMLInputElement).focus()
  }
}

const handleSubmit = async () => {
  const otpJoin = otp.value.join("")
  if (otpJoin.length !== 6) {
    error.value = "Please enter a valid 6-digit OTP."

    return
  }
  error.value = ""
  alert("Entered OTP is: " + otpJoin)
  const { data, pending } = await useFetch("/api/auth/valid-otp", {
    method: "POST",
    body: {
      otp: otpJoin,
    },
  })
  if (data.value) {
    await navigateTo("/home")
  }
}
const handlerResendOTP = async () => {
  const { data, pending, error } = await useFetch("/api/auth/resend-otp")

  console.log(data.value)
}
</script>
