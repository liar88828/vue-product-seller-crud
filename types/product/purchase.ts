export type Purchase = {
  userBuy: {
    id: string
    name: string
    address: string
    phone: string
  }
  id: string
  trolly: {
    id: string
    name: string
    brand: string
    image: string
    price: number
    stock: number
  }[]
}
