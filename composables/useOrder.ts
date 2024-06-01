import type { OrderProps } from "~/assets/example/dataOrder"
import { storeFilter, type FilterData } from "~/assets/filter"

export const useOrder = () => {
  const store = reactive<FilterData>(storeFilter)
  const filter = (data: OrderProps[]) =>
    data.filter((d) => {
      if (store.status === "Status") {
        return d
      }
      return d.status.toLowerCase().includes(store.status.toLowerCase())
    })

  // const newData = computed(() => {
  //   return props.dataOrders.filter((data) => {
  //     return data.status.toLowerCase().includes(stores.status.toLowerCase())
  //   })
  // })

  // const searchCategory = computed(() =>
  //   data.map((d) => d.trolly.filter((d) => d.typeId === store.category))
  // )
  return {
    filter,
    store,
    //  searchCategory
  }
}
