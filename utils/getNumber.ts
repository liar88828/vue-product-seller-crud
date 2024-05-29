export default (number: number) =>
  new Intl.NumberFormat("id-ID", {
    notation: "compact",
  }).format(number)
