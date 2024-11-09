import { type FilterData, storeFilter } from "~/assets/filter"
import type { TransClient, TransServer } from "~/types/market/order"

export const useOrder = (data: TransClient[]) => {
  const store = reactive<FilterData>(storeFilter)
  const filter = computed(() =>
    data.filter((d) => {
      if (store.status === "Status") {
        return d
      }
      return d.status.toLowerCase().includes(store.status.toLowerCase())
    })
  )

  return {
    filter,
    store,
  }
}
