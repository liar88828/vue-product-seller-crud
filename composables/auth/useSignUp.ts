import type { SignUpProps } from "~/types/auth/user"
import type { StoreBase } from "~/types/globals/store"

export const useSignUp = () => {
  const { fetch } = useUserSession()

  const store = reactive<StoreBase<SignUpProps>>({
    pending: false,
    success: false,
    msg: "",
    error: {
      name: [],
      email: [],
      password: [],
      confPass: [],
    },
    data: {
      confPass: "",
      name: "",
      email: "",
      password: "",
    },
  })

  const validData = (data: SignUpProps) => {
    const valid = zods.user.signUp.safeParse(data)
    if (!valid.success) {
      valid.error.errors.map((err) => {
        store.error[err.path[0] as keyof SignUpProps] = [err.message]
      })
      throw new Error("Form Error Sign In")
    }
    if (valid.success) {
      Object.keys(store.error).map(
        (key) =>
          //@ts-expect-error
          (store.error[key] = [])
      )
    }
    return valid.data
  }

  const signUp = async (body: SignUpProps) => {
    console.log("sign up", body)
    const { data, error, pending } = await useFetch("/api/auth/sign-up", {
      method: "POST",
      body,
    })

    console.log(data.value?.user, error, pending)
    if (error.value) {
      throw new Error(`Server Error Sign In ${error.value?.statusMessage}`)
    }
    store.pending = pending.value
    return data
  }
  const handleSubmit = async () => {
    try {
      const valid = validData(store.data)
      await signUp(valid)
      fetch()
      await navigateTo("/auth/verify")
    } catch (e) {
      if (e instanceof Error) {
        store.msg = e.message
      }
    } finally {
      store.pending = false
    }
  }

  return {
    store,
    handleSubmit,
  }
}
// const store.error = reactive<ErrZod<SignUpProps>>({
//   success: false,
//   pending: false,
//   msg: "",
//   data: {
//     email: "",
//     password: "",
//     confPass: "",
//     name: "",
//   },
// })

// const restore = (valid: GetTry<SignUpProps>) => {
//   store.success = false
//   store.error = {
//     email: [valid.data.email],
//     password: [valid.data.password],
//     confPass: [valid.data.confPass],
//     name: [valid.data.name],
//   }
// }
