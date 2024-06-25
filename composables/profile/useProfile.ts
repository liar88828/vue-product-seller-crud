export const useProfile = (data: MarketServiceSingle) => {
  let store = reactive({ market: data })

  const handleUpdate = async (body: MarketServiceSingle) => {
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
  }
  return { store, handleUpdate }
}
