export const useHistoryUser = () => {
  return {
    findAll: async () => {
      return useFetch("/api/user/history/")
    },
    findId: async (id: string | string[]) => {
      return useFetch("/api/user/history/:id", {
        params: {
          id,
        },
      })
    },
  }
}
