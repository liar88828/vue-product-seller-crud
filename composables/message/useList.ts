import type {
  FilterMessage,
  NotifyMessage,
  TypeMessage,
} from "~/types/message/notify"
import type { keyPage } from "~/types/globals/pagenation"
const exData: FilterMessage = { value: "Select", name: "" }
export const useList = () => {
  const keys: keyPage = "message_page"
  const store = reactive<{ value: TypeMessage; name: string }>(exData)
  const filter = (data: NotifyMessage[]) =>
    data
      .filter((d) => {
        if (store.value === "Select") {
          return d
        }
        return d.type.includes(store.value)
      })
      .filter((d) => {
        if (store.name === "") {
          return d
        }
        return d.name.toLowerCase().includes(store.name.toLowerCase())
      })
  const page = (k: keyPage) => useState(k)
  return {
    keys,
    filter,
    store,
    page,
  }
}
