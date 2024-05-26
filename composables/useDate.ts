export const useDate = () => {
  const getDate = (data: Date) => {
    return new Date(data).toLocaleDateString("id-ID", {
      dateStyle: "full",
    })
  }
  return { getDate }
}
