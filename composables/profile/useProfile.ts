export const useProfile = (data: MarketServerFull) => {
  const store = reactive(data)
  const handleSave = async () => {
    console.log(store)
    const { data } = await useFetch("/api/market/profile", {
      method: "PUT",
      body: store,
    })
    console.log(data.value?.market)
    // await navigateTo("/market/profile")
  }
  return { store, handleSave }
}
