import type { TrolleyCreateClient } from "~/types/trolley"

export const useTrolley = () => {
  const refreshTrollyNotify = () => refreshNuxtData("trolley_notify")

  const addTrolley = async (item: TrolleyCreateClient) => {
    const data = await useFetch("/api/user/trolley/:id", {
      params: {
        id: item.id_trolley,
      },
      method: "POST",
      body: item,
    })
    refreshTrollyNotify()
    return data
  }

  const incrementTrolley = async (item: TrolleyCreateClient) => {
    const data = await useFetch("/api/user/trolley/increment", {
      method: "PUT",
      body: item,
    })
    refreshTrollyNotify()
    return data
  }

  const decrementTrolley = async (item: TrolleyCreateClient) => {
    const data = await useFetch("/api/user/trolley/decrement", {
      method: "PUT",
      body: item,
    })
    refreshTrollyNotify()
    return data
  }

  const pushTrolley = async (id: number) => {
    // console.log(id, "woy")
    const data = await useFetch("/api/user/trolley/add", {
      params: {
        id,
      },
      method: "POST",
    })
    refreshTrollyNotify()
    return data
  }

  const removeTrolley = async (id: number) => {
    const data = await useFetch("/api/user/trolley/:id", {
      params: {
        id,
      },
      method: "DELETE",
    })
    refreshTrollyNotify()
    return data
  }

  const getTrolleyId = async (id: number) => {
    const data = await useFetch("/api/user/trolley/:id", {
      params: {
        id,
      },
      method: "GET",
    })
    return data
  }
  const getTrolley = async () => {
    const data = await useFetch("/api/user/trolley/", {
      method: "GET",
    })
    return data
  }

  const notifyTrolley = async () => {
    return await useFetch("/api/user/trolley/notify", {
      key: "trolley_notify",
    })
  }

  return {
    getTrolleyId,
    getTrolley,
    addTrolley,
    pushTrolley,
    removeTrolley,
    notifyTrolley,
    decrementTrolley,
    incrementTrolley,
  }
}
