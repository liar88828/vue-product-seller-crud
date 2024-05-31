import type { OrderProps } from "~/assets/example/dataOrder"
import { storeFilter, type FilterData } from "~/assets/filter"

export const storeFilterOrder = reactive<FilterData>(storeFilter)
export const useFilterOrder = (data: OrderProps[]) => {
  // provide<FilterData>("user_order", stores)

  const filterStatus = computed(() =>
    data.filter((d) => {
      if (storeFilterOrder.status === "Status") {
        return d
      }
      return d.status
        .toLowerCase()
        .includes(storeFilterOrder.status.toLowerCase())
    })
  )
  // const newData = computed(() => {
  //   return props.dataOrders.filter((data) => {
  //     return data.status.toLowerCase().includes(stores.status.toLowerCase())
  //   })
  // })

  // const searchCategory = computed(() =>
  //   data.map((d) => d.trolly.filter((d) => d.typeId === store.category))
  // )
  return {
    filterStatus,
    // stores,
    //  searchCategory
  }
}
