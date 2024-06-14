import type { ErrZod, SignUpProps } from "~/types/auth/user"

export const useSignUp = () => {
  const store = reactive<SignUpProps>({
    confPass: "",
    name: "",
    email: "",
    password: "",
  })

  const errStore = reactive<ErrZod<SignUpProps>>({
    success: false,
    data: {
      email: "",
      password: "",
      confPass: "",
      name: "",
    },
  })

  const handleSubmit = async () => {
    const valid = getTry<SignUpProps>(() => zods.signUp.parse(store))
    // to="/auth/verify"
    console.log(valid)
    if (valid.success) {
      const { data, error } = useFetch("/api/auth/sign-up", {
        method: "POST",
        body: valid.data,
      })
      if (!data.value) {
        console.log(error.value)
      } else if (error.value) {
        throw createError({ statusCode: 404, statusMessage: "Error Sign up" })
      } else {
        await navigateTo("/home")
      }
      await navigateTo("/auth/verify")
    } else {
      console.error(" is error ")
      errStore.success = false
      errStore.data = {
        email: valid.data.email,
        password: valid.data.password,
        confPass: valid.data.confPass,
        name: valid.data.name,
      }
    }
  }
  return {
    store,
    errStore,
    handleSubmit,
  }
}
