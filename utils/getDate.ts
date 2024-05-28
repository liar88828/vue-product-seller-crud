export default (data: Date) => {
  if (typeof data === "undefined") {
    return "Date Error"
  }
  const date = new Date(data).toLocaleDateString("id-ID", {
    dateStyle: "full",
  })
  return date
}
