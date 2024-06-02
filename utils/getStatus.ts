export default (text: string) => {
  if (text === "Waiting") {
    return "btn btn-primary btn-outline sm:btn-sm btn-xs active"
  }
  if (text === "Pending") {
    return "btn btn-warning btn-outline sm:btn-sm btn-xs active"
  }
  if (text === "Delivered") {
    return "btn btn-success btn-outline sm:btn-sm btn-xs active"
  }
  if (text === "Cancelled") {
    return "btn btn-error btn-outline sm:btn-sm btn-xs active"
  }
}
