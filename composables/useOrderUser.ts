export const useOrderUser = () => {
  return {
    findAll: async () => {
      return useFetch(`/api/user/order/`)
    },
    findId: async (id: string | string[]) => {
      return useFetch(`/api/user/order/:id`, {
        params: { id },
      })
    },
  }
}
