import type { Product } from "@prisma/client"

const dataShop = {
  name: "",
  category: "",
  sort: "",
  brand: "",
  range: {
    min: 0,
    max: 0,
  },
}
export const useShop = () => {
  const filterCase = reactive<{
    category: string
    sort: string
    brand: string
    price: {
      min: number
      max: number
    }
  }>({
    category: "",
    sort: "",
    brand: "",
    price: {
      min: 0,
      max: 0,
    },
  })

  const isMore = (text: string) => text.length > 1

  const dataFilter = {
    category: ["Chocolate", "Grapes", "Milk", "Bread"],
    sort: ["Asc", "Desc"],
    brand: ["BMW", "Gigabyte", "Lenovo", "Asus", "Apple", "Samsung", "Dell"],
    price: {
      min: 0,
      max: 0,
    },
  }

  const store = reactive(dataShop)
  const filter = (data: Product[]) => {
    return data
  }
  return { store, filter }
}
