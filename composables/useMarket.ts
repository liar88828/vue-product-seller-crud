import type { FilterData } from "~/assets/filter"
import type { ProductItem } from "~/types/product/item"
const defaultData = {
  search: "",
  category: "Category",
  stock: "Stock",
  price: "Price",
  status: "Status",
}
export const useMarket = () => {
  const { fetch } = useUserSession()

  const store = reactive<FilterData>(defaultData)
  const storeCreate = reactive<StoreBase<MarketRegisterClient>>({
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
  const validCreate = (data: MarketRegisterClient) => {
    data.since = new Date(data.since)
    console.log(data)
    const valid = zods.market.register.safeParse(data)
    if (!valid.success) {
      valid.error.errors.map((err) => {
        console.log(err)

        storeCreate.error[err.path[0] as keyof MarketRegisterClient] = [
          err.message,
        ]
      })
      throw new Error("Form Error Sign In")
    }
    if (valid.success) {
      Object.keys(storeCreate.error).map(
        (key) =>
          //@ts-expect-error
          (store.error[key] = [])
      )
    }
    return valid.data
  }
  const filter = (data: ProductItem[]) => {
    const search = data.filter((data) => {
      return data.name.toLowerCase().includes(store.search.toLowerCase())
    })
    // stock High and Low
    const stock = search.toSorted((a, b) => {
      if (store.stock !== "Stock") {
        if (store.stock === "Low") return a.stock - b.stock
        if (store.stock === "High") return b.stock - a.stock
      }
      return 0
    })

    const price = stock.toSorted((a, b) => {
      if (store.price !== "Price") {
        if (store.price === "Low") return a.price - b.price
        if (store.price === "High") return b.price - a.price
      }
      return 0
    })
    return price
  }

  const apiCreateMarket = async (body: MarketRegisterClient) => {
    const { data, error, pending } = await useFetch("/api/market/profile", {
      method: "POST",
      body,
    })
    // console.log(data.value?.market)

    if (error.value) {
      throw new Error(` Error Create ${error.value?.statusMessage}`)
    }
    // console.log(data)
    storeCreate.pending = pending.value
    return data.value
  }

  return {
    store,
    filter,
    findId: async (id: string | string[]) => {
      return useFetch(`/api/shop/market/:id/profile`, {
        params: {
          id,
        },
      })
    },
    findBySession: async () => {
      return useFetch("/api/market/profile")
    },
    updateStore: (data: MarketClient) => reactive({ market: data }),

    updateMarket: async (body: MarketClient) => {
      // console.log(store.market)
      const { data, error } = await useFetch("/api/market/profile", {
        method: "PUT",
        body,
      })
      if (error.value) {
        // console.log(error.value)
        throw new Error("error bos")
      }
      console.log(data.value?.market)
      // await navigateTo("/market/profile")
    },
    storeCreate,
    onCreate: async () => {
      try {
        storeCreate.pending = true
        const valid = validCreate(storeCreate.data)

        const res = await apiCreateMarket(valid)
        if (res) {
          await fetch()
          await navigateTo("/market/profile")
        }
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message)
          storeCreate.msg = e.message
        }
      } finally {
        storeCreate.pending = false
        console.log("test")
      }
    },
  }
}
