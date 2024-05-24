import type { Purchase } from "~/types/product/purchase"

export const dataProduct: Purchase[] = [
  {
    id: "1",
    trolly: [
      {
        id: "1",
        brand: "Hart Hagerty",
        image:
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        name: "Shoes",
        price: 15000,
        stock: 30,
      },
    ],
    userBuy: {
      id: "1",
      name: "John Doe",
      phone: "123123112",
      address: "Jl. Jendral Sudirman No. 1",
    },
  },
]
