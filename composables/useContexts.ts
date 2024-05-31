import type { UnwrapNestedRefs } from "vue"
import { storeFilter, type FilterData } from "~/assets/filter"

export const useContexts = <T extends Object>(key: string, data: T) => {
  const mutation = reactive<T>(data)
  provide<UnwrapNestedRefs<T>>(key, mutation)

  const deliver = inject(key)
  return { mutation, deliver }
}
// const data = useUseContexts<MarketProduct>("sembarang", storeFilter)
