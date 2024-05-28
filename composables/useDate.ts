export const useDate = () => {
  const date = (data: Date) => {
    return getDate(data)
  }

  return { getDate: date }
}
