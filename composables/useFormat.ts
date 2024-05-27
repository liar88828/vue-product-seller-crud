export const useFormat = () => {
  const formatRupiah = (amount: number) => getRupiah(amount)
  const formatUrl = (url: string) => getUrl(url)
  const formatNumber = (number: number) => getNumber(number)
  const totalNumber = (price: number, qty: number) =>
    getTotal(price, qty).totalProduct
  const formatPhone = (number: string) => getPhone(number)
  return { formatRupiah, formatUrl, formatNumber, totalNumber, formatPhone }
}
