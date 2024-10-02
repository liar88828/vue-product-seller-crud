export const useConfirm = () => {
  const refreshConfirmId = () => refreshNuxtData("confirm_id")
  const refreshConfirmData = () => refreshNuxtData("confirm_data")

  return {
    onReject: async (id: string | string[]) =>
      useFetch(`/api/transaction/confirm/${id}`, {
        method: "DELETE",
      }).then((data) => {
        refreshConfirmId()
        return data
      }),

    onConfirm: async (id: string | string[]) =>
      useFetch(`/api/transaction/confirm/${id}`, {
        method: "PUT",
      }).then((data) => {
        refreshConfirmId()
        return data
      }),

    getDataId: async (id: string | string[]) =>
      useFetch(`/api/transaction/confirm/${id}`, {
        method: "GET",
        key: "confirm_id",
      }),

    getData: async () =>
      useFetch("/api/transaction/confirm", {
        key: "confirm_data",
      }),
  }
}
