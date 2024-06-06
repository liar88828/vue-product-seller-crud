import type { ProfileCompany } from "~/types/profile/profile"

export const useCompany = (data: ProfileCompany) => {
  const store = reactive(data)
  const handleSave = async () => {
    console.log(store)
    await navigateTo("/market/profile")
  }
  return { store, handleSave }
}
