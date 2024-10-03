export const useHistoryMarket = () => {
  return {
    findAll: async () => {
      return useFetch("/api/market/history")
    },
    findId: async (id: string | string[]) => {
      return useFetch("/api/market/history/:id")
    },
  }
}
