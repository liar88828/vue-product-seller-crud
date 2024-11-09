export const useOrderMarket = () => {
  const refreshOrderId = () => refreshNuxtData("order_id")
  const refreshOrderData = () => refreshNuxtData("order_data")

  return {
    onReject: async (id: string | string[]) =>
      useFetch(`/api/market/order/${id}`, {
        method: "DELETE",
      }).then((data) => {
        refreshOrderId()
        return data
      }),

    onConfirm: async (id: string | string[]) =>
      useFetch(`/api/market/order/${id}`, {
        method: "PUT",
      }).then((data) => {
        refreshOrderId()
        return data
      }),

    getDataId: async (id: string | string[]) =>
      useFetch(`/api/market/order/${id}`, {
        method: "GET",
        key: "order_id",
      }),

    getData: async () =>
      useFetch("/api/market/order", {
        key: "order_data",
      }),
  }
}
