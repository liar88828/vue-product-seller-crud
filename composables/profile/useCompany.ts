import type { ProfileMarket } from "~/types/market/ProfileCompany"

export const useCompany = (data: ProfileMarket) => {
  const store = reactive(data)
  const handleSave = async () => {
    console.log(store)
    await navigateTo("/market/profile")
  }
  return { store, handleSave }
}
