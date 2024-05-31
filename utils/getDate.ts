export default (
  data: Date,
  type: "full" | "long" | "medium" | "short" | undefined = "full"
) => {
  if (typeof data === "undefined") {
    return "Date Error"
  }
  const date = new Date(data).toLocaleDateString("id-ID", {
    dateStyle: type,
  })
  return date
}
