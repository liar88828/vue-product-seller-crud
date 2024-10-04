export const useMessage = () => {
  const refreshMessage = () => refreshNuxtData("message_list")

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
  }
}
