export default (
  number: number,
  format: "compact" | "standard" | "scientific" | "engineering" = "compact"
) =>
  new Intl.NumberFormat("id-ID", {
    notation: format,
  }).format(number)
