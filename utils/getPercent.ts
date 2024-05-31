export default (value: number) => {
  return new Intl.NumberFormat("id-Id", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(value / 100)
}
