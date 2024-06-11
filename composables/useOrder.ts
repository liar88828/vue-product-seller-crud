import { storeFilter, type FilterData } from "~/assets/filter"
import type { OrderProps } from "~/types/market/order"

export const useOrder = () => {
  const store = reactive<FilterData>(storeFilter)
  const filter = (data: OrderProps[]) =>
    data.filter((d) => {
      if (store.status === "Status") {
        return d
      }
      return d.status.toLowerCase().includes(store.status.toLowerCase())
    })

  return {
    filter,
    store,
  }
}
