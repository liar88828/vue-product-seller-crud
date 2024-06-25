import type { StoreBase } from "~/types/globals/store"
import type { MarketServer } from "~/types/market/ProfileCompany"

export const useMarketProfile = () => {
  const { fetch } = useUserSession()
  type Type = MarketServer
  const store = reactive<StoreBase<Type>>({
    pending: false,
    msg: "",
    data: {
      name: "",
      industry: "",
      address: "",
      description: "",
      mission: "",
      vision: "",
      history: "",
      since: new Date(),
    },
    error: {
      name: [],
      industry: [],
      address: [],
      description: [],
      mission: [],
      vision: [],
      history: [],
      since: [],
    },
  })

  const validData = (data: Type) => {
    data.since = new Date(data.since)
    const valid = zods.market.create.safeParse(data)
    if (!valid.success) {
      valid.error.errors.map((err) => {
        store.error[err.path[0] as keyof Type] = [err.message]
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

  const create = async (body: Type) => {
    const { data, error, pending } = await useFetch("/api/market/profile", {
      method: "POST",
      body,
    })
    console.log(data)
    if (error.value) {
      throw new Error(` Error Create ${error.value?.statusMessage}`)
    }
    store.pending = pending.value
    return data
  }

  const handleSubmit = async () => {
    try {
      store.pending = true
      const valid = validData(store.data)

      const res = await create(valid)
      if (res.value?.market) {
        await fetch()
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
        store.msg = e.message
      }
    } finally {
      store.pending = false
      console.log("test")
    }
  }
  return {
    store,
    handleSubmit,
  }
}
