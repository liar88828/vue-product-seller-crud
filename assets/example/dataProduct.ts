import type { Product } from "@prisma/client"
import type { DataTechnicalSpc, ProductItem } from "~/types/product/item"

export const dataProduct: Product = {
  image: "https://picsum.photos/200",
  name: "Acme Circles ",
  price: 49.99,
  stock: 2,
  brand: "Acme",
  typeId: "1",
  id: "1",
  description: "Acme Circles T-Shirt",
  userId: "1",
}
export const dataProduct2: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "adidasss",
  typeId: "13",
  id: "1234",
  description: "i dont know",
  userId: "112",
}

export const dataProducts: ProductItem[] = [
  {
    brand: "Hart Hagerty",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    name: "Shoes",
    price: 123,
    stock: 10,
    id: "1",
    typeId: "1",
    userId: "1",
    spec_good: [
      "Powerful noise-cancelling technology",
      "Wireless Bluetooth connectivity",
      "Long-lasting battery life",
      "Comfortable and adjustable design",
    ],
    spec_prod: [
      {
        type: "Audio",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
      {
        type: "Design",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
    ],
  },
  {
    brand: "Hart Hagerty",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    name: "Shoes",
    price: 123,
    stock: 10,
    id: "23423",
    typeId: "1",
    userId: "1",
    spec_good: [
      "Powerful noise-cancelling technology",
      "Wireless Bluetooth connectivity",
      "Long-lasting battery life",
      "Comfortable and adjustable design",
    ],
    spec_prod: [
      {
        type: "Audio",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
      {
        type: "Design",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
    ],
  },
  {
    brand: "Hart Hagerty",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    name: "Shoes",
    price: 123,
    stock: 10,
    id: "2",
    typeId: "1",
    userId: "1",
    spec_good: [
      "Powerful noise-cancelling technology",
      "Wireless Bluetooth connectivity",
      "Long-lasting battery life",
      "Comfortable and adjustable design",
    ],
    spec_prod: [
      {
        type: "Audio",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
      {
        type: "Design",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
    ],
  },
]

export const dataTechnicalSpc: DataTechnicalSpc[] = [
  {
    t: "Movement",
    p: "Swiss-made automatic movement with 28,800 vph and 42-hour power reserve.",
  },
  {
    t: "Case",
    p: "Stainless steel case with a diameter of 40mm and a thickness of 12mm.",
  },
  {
    t: "Dial",
    p: "Scratch-resistant sapphire crystal with a silver-tone dial and luminous hands and markers.",
  },
  {
    t: "Strap",
    p: "Genuine leather strap with a deployant buckle closure.",
  },
  {
    t: "Water Resistance",
    p: "Water-resistant up to 100 meters (330 feet).",
  },
  {
    t: "Warranty",
    p: "5-year international warranty.",
  },
]
