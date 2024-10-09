import type { StoreBase } from "~/types/globals/store"
import type { ProductMarketCreate } from "~/types/product/data.db"

export const useProduct = () => {
  type Type = ProductMarketCreate
  const store = reactive<StoreBase<Type>>({
    pending: false,
    error: {
      brand: [],
      description: [],
      image: [],
      name: [],
      price: [],
      stock: [],
      id_market: [],
      type: [],
      // id_user: [],
    },
    data: {
      brand: "",
      description: "",
      name: "",
      price: 0,
      stock: 0,
      type: "",
      id_market: 6666,
      image: "https://picsum.photos/200/300",
      // id_user: session.value.session.id,
    },
  })

  const validData = (data: Type) => {
    const valid = zods.product.create.safeParse(data)

    if (!valid.success) {
      valid.error.errors.map((err) => {
        store.error[err.path[0] as keyof Type] = [err.message]
      })
      console.log(valid.error.errors)
      throw new Error("Form Error Create Product")
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

  const handlerCreate = async (body: Type) => {
    const { data, error, pending } = await useFetch("/api/product", {
      method: "POST",
      body,
    })

    console.log(data, error, pending)
    if (error.value) {
      throw new Error(`Server Error Sign In ${error.value?.statusMessage}`)
    }
    store.pending = pending.value
    return data
  }

  return {
    shopAll: async () => {
      return useFetch(`/api/product/shop`)
    },

    shopId: async (id: string | string[]) => {
      return useFetch("/api/product/shop/:id", {
        params: {
          id: id,
        },
      })
    },

    marketAll: async () => {
      return useFetch("/api/product/market")
    },

    marketId: async (id: string | string[]) => {
      return useFetch(`/api/product/market/${id}`)
    },

    storeEdit: reactive<ProductClient>({
      brand: "",
      description: "",
      id: 0,
      image: "",
      name: "",
      price: 0,
      stock: 0,
      id_market: 0,
      // id_user: "",
      type: "",
      sold: 0,
    }),
    onEdit: async (store: ProductClient, id: number) => {
      try {
        const dataValid = zods.product.create.parse(store)
        const res = await useFetch(`/api/product/market/${id}`, {
          method: "PUT",
          body: dataValid,
        })
        if (res.error.value) {
          console.log(res.error.value)
          // console.error(res.data.value)
        }
        await navigateTo("/market/product")
      } catch (e) {
        console.log(e)
      }
    },

    onCreate: async () => {
      try {
        const valid = validData(store.data)
        // console.log(valid)
        await handlerCreate(valid)
        await navigateTo("/market/product/")
      } catch (e) {
        if (e instanceof Error) {
          store.msg = e.message
        }
      } finally {
        store.pending = false
      }
    },
    store,

    bestSeller: async () => {
      return useFetch("/api/product/best-seller")
    },
    newProduct: async () => {
      return useFetch("/api/product/new-product")
    },
    trending: async () => {
      return useFetch("/api/product/trending")
    },
  }
}
