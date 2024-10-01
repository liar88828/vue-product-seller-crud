export const useTransaction = () => {
  return {
    checkout: async (data: TransactionCheckoutClient) => {
      return useFetch("/api/transaction/checkout", {
        method: "POST",
        body: data,
      })
    },
  }
}
