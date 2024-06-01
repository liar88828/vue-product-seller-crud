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
  const store = reactive<FilterData>(defaultData)
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

  return { store, filter }
}
