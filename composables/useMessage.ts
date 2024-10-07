import type { MessageContactPeople } from "~/assets/example/message/contact"

const exData: FilterMessage = { value: "Select", name: "" }
const keys: keyPage = "message_page"

export const useMessage = () => {
  const refreshMessage = () => refreshNuxtData("message_list")
  const page = (k: keyPage) => useState(k)
  const store = reactive<{ value: TypeMessage; name: string }>(exData)
  const storeNameContact = ref("")

  const position = (name: string, data: MessageChatClient) =>
    computed(() => name === data.name)

  const filter = (data: MessageListClient[]) =>
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

  return {
    findId: async (id: string | string[]) => {
      return useFetch(`/api/message/${id}`)
    },
    findAll: () => {
      return useFetch(`/api/message/list`, {
        key: "message_list",
      })
    },
    notify: async () => {
      return useFetch(`/api/message/notify`, {
        key: "message_notify",
      })
    },
    //
    keys,
    filter,
    store,
    page,
    position,
    storeNameContact,
    searchContact: (data: MessageContactPeople[]) =>
      computed(() =>
        data.filter((d) => {
          // console.log(d.title.toLowerCase().includes(searchName.value.toLowerCase()))
          return d.title
            .toLowerCase()
            .includes(storeNameContact.value.toLowerCase())
        })
      ),
  }
}
