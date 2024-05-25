export const useStyle = () => {
  const getStatus = (text: string) => {
    if (text === "Waiting") {
      return "badge badge-info  badge-outline"
    }
    if (text === "Pending") {
      return "badge badge-warning  badge-outline"
    }
    if (text === "Delivered") {
      return "badge badge-success  badge-outline"
    }
    if (text === "Cancelled") {
      return "badge badge-error badge-outline"
    }
  }
  return { getStatus }
}
