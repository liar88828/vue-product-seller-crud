export const useConfirm = (
  id: string | string[],
  refresh: (opts?: any) => Promise<void>
) => {
  const onDelete = async () => {
    await useFetch(`/api/market/confirm/${id}`, {
      method: "DELETE",
    })
    refresh()
  }

  const onConfirm = async () => {
    await useFetch(`/api/market/confirm/${id}`, {
      method: "PUT",
    })
    refresh()
  }

  return {
    onDelete,
    onConfirm,
  }
}
