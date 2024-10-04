import type { TrolleyCounter, TrolleyCreateClient } from "~/types/trolley"

export const useTrolley = () => {
  const refreshTrollyNotify = () => refreshNuxtData("trolley_notify")
  const refreshTrollyAll = () => refreshNuxtData("trolley_all")
  const refreshTrollyTotal = () => refreshNuxtData("trolley_total")

  const addTotal = useState<TolleyMark[]>("add_total")

  // const dataTotalPays = computed(() =>
  //   // must price not qty
  //   addTotal.value.reduce((a, b) => a + b.price * b.qty, 0)
  // )

  return {
    findId: async (id: number) => {
      const data = await useFetch("/api/user/trolley/:id", {
        params: {
          id,
        },
        method: "GET",
      })
      return data
    },
    findAll: async () => {
      const data = await useFetch("/api/user/trolley/", {
        method: "GET",
        key: "all_trolley",
      })
      return data
    },
    addTrolley: async (item: TrolleyCreateClient) => {
      const data = await useFetch("/api/user/trolley/:id", {
        params: {
          id: item.id_trolley,
        },
        method: "POST",
        body: item,
      })
      refreshTrollyNotify()
      refreshTrollyAll()
      return data
    },
    pushTrolley: async (id: number) => {
      // console.log(id, "woy")
      const data = await useFetch("/api/user/trolley/:id", {
        params: {
          id,
        },
        method: "POST",
      })
      refreshTrollyNotify()
      refreshTrollyAll()

      return data
    },
    removeTrolley: async (id_trolley: number) => {
      const data = await useFetch("/api/user/trolley/:id", {
        params: {
          id: id_trolley,
        },
        method: "DELETE",
      })
      refreshTrollyAll()
      refreshTrollyNotify()
      return data
    },
    notifyTrolley: async () => {
      return await useFetch("/api/user/trolley/notify", {
        key: "trolley_notify",
      })
    },
    decrementTrolley: async (item: TrolleyCounter) => {
      const data = await useFetch("/api/user/trolley/decrement", {
        method: "PUT",
        body: item,
      })
      refreshTrollyNotify()
      refreshTrollyTotal()
      refreshTrollyAll()

      return data
    },
    incrementTrolley: async (item: TrolleyCounter) => {
      const data = await useFetch("/api/user/trolley/increment", {
        method: "PUT",
        body: item,
      })
      refreshTrollyNotify()
      refreshTrollyTotal()
      refreshTrollyAll()

      return data
    },
    markTrolley: async (
      item: Pick<TrolleyCreateClient, "id_trolley" | "mark">
    ) => {
      const data = await useFetch("/api/user/trolley/:id/mark", {
        params: {
          id: item.id_trolley,
        },
        method: "PUT",
        body: item,
      })
      refreshTrollyTotal()
      refreshTrollyAll()

      // console.log(data.data.value?.trolly)
      return data
    },
    calculateTrolley: (data: TrolleyProduct[]) => {
      return computed(() =>
        data.reduce((a, b): number => {
          if (b.mark) {
            return b.Product.price * b.qty + a
          }
          return a
        }, 0)
      ).value
    },

    getMarkTrolley: async () => {
      const data = await useFetch("/api/user/trolley/mark", {
        method: "GET",
      })
      return data
    },
  }
}
