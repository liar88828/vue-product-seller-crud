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
    const valid = getTry<SignUpProps>(() => getZod().signUpSchema.parse(store))
    // to="/auth/verify"
    console.log(valid)
    if (valid.success) {
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
