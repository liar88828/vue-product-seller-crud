import type { FilterData } from "~/assets/filter"
const defaultData = {
  search: "",
  category: "Category",
  stock: "Stock",
  price: "Price",
  status: "Status",
}
export const useMarket = () => {
  const store = reactive<FilterData>(defaultData)
  return { store }
}
