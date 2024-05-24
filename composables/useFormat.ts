export const useFormat = () => {
  const formatRupiah = (amount: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount)

  const formatUrl = (url: string) => url.split("/").pop()

  const formatNumber = (number: number) =>
    new Intl.NumberFormat("id-ID").format(number)

  const totalNumber = (price: number, qty: number) => formatRupiah(price * qty)

  const formatPhone = (number: string) => {
    const countryCode = "+64"
    const part1 = number.slice(0, 4)
    const part2 = number.slice(4, 8)
    const part3 = number.slice(8)

    return `${countryCode}-${part1}-${part2}-${part3}`
  }

  return { formatRupiah, formatUrl, formatNumber, totalNumber, formatPhone }
}
