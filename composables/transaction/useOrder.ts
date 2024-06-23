import { type FilterData, storeFilter } from "~/assets/filter"
import type { TransProps } from "~/types/market/order"

export const useOrder = () => {
  const store = reactive<FilterData>(storeFilter)
  const filter = (data: TransProps[]) =>
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
