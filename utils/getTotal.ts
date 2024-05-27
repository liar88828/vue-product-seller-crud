export default (price: number, qty: number) => {
  return {
    totalProduct: getRupiah(price * qty),
  }
}
