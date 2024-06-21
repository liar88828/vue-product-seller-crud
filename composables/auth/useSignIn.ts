import type { GetTry, SignInProps } from "~/types/auth/user"
import type { StoreBase } from "~/types/globals/store"
// send to database
// if found will redirect
// confirm to send otp because session is valid
//
// else not found will redirect to sign up
// and make new Account then send otp
export const useSignIn = () => {
  const { fetch } = useUserSession()

  const store = reactive<StoreBase<SignInProps>>({
    pending: false,
    msg: "",
    data: {
      email: "",
      password: "",
    },
    error: {
      email: [],
      password: [],
    },
  })

  const validData = (data: SignInProps) => {
    const valid = zods.signIn.safeParse(data)
    if (!valid.success) {
      valid.error.errors.map((err) => {
        store.error[err.path[0] as keyof SignInProps] = [err.message]
      })
      throw new Error("Form Error Sign In")
    }
    if (valid.success) {
      // store.error.password = []
      // store.error.email = []
      Object.keys(store.error).map(
        (key) =>
          //@ts-expect-error
          (store.error[key] = [])
      )
    }
    return valid.data
  }

  const signIn = async (body: SignInProps) => {
    const { data, error, pending } = await useFetch("/api/auth/sign-in", {
      method: "POST",
      body,
    })
    if (error.value) {
      throw new Error(` Error Sign In ${error.value?.statusMessage}`)
    }
    store.pending = pending.value
    return data
  }

  const handleSubmit = async () => {
    try {
      store.pending = true
      const valid = validData(store.data)
      await signIn(valid)
      await fetch()
      await navigateTo("/home")
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
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
