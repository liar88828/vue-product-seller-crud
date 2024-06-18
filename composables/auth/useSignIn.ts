import type { ErrZod, SignInProps } from "~/types/auth/user"

export const useSignIn = () => {
  const store = reactive<SignInProps>({ email: "", password: "" })
  const errStore = reactive<ErrZod<SignInProps>>({
    success: false,
    data: {
      email: "",
      password: "",
    },
  })
  const handleSubmit = async () => {
    // console.log(store)

    const valid = getTry<SignInProps>(() => zods.signIn.parse(store))
    // console.log(valid)

    // send to database
    // if found will redirect
    // confirm to send otp because session is valid
    //
    // else not found will redirect to sign up
    // and make new Account then send otp
    if (valid.success) {
      const { data, error } = useFetch("/api/auth/sign-in", {
        method: "POST",
        body: valid.data,
      })
      if (!data.value) {
        console.log(error.value)
      } else if (error.value) {
        throw createError({ statusCode: 404, statusMessage: "Error Sign In" })
      } else {
        // console.log(data.value)
        await navigateTo("/home")
      }
    } else {
      console.error(" is error ")
      errStore.success = false
      errStore.data = {
        email: valid.data.email,
        password: valid.data.password,
      }
    }
  }
  return {
    store,
    errStore,
    handleSubmit,
  }
}
