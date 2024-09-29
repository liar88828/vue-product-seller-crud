export const useUseTransaction = () => {
  return {
    transactionApply: async (item: number) => {
      const data = await useFetch("/api/transaction/checkout", {
        method: "POST",
        body: {},
      })
      return data
    },
  }
}
