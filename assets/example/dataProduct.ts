import type { Product } from "@prisma/client"
import type { DataTechnicalSpec, ProductItem } from "~/types/product/item"

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
  brand: "Adidas's",
  typeId: "13",
  id: "1234",
  description: "i dont know",
  userId: "112",
}
export const dataProduct3: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "Adidas's",
  typeId: "13",
  id: "2131",
  description: "i dont know",
  userId: "112",
}
export const dataProduct54: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "adidas's",
  typeId: "13",
  id: "2131",
  description: "i dont know",
  userId: "112",
}
export const dataProduct1: Product = {
  image: "https://picsum.photos/200",
  name: "Sneakers",
  price: 120,
  stock: 30,
  brand: "Nike",
  typeId: "11",
  id: "1001",
  description: "Comfortable running shoes",
  userId: "110",
}
export const dataProduct12: Product = {
  image: "https://picsum.photos/210",
  name: "Backpack",
  price: 80,
  stock: 45,
  brand: "The North Face",
  typeId: "12",
  id: "1002",
  description: "Durable and spacious",
  userId: "111",
}
export const dataProduct11: Product = {
  image: "https://picsum.photos/220",
  name: "Shock",
  price: 443,
  stock: 64,
  brand: "adidas's",
  typeId: "13",
  id: "2131",
  description: "i dont know",
  userId: "112",
}
export const dataProduct4: Product = {
  image: "https://picsum.photos/230",
  name: "T-Shirt",
  price: 25,
  stock: 100,
  brand: "H&M",
  typeId: "14",
  id: "1003",
  description: "Soft cotton t-shirt",
  userId: "113",
}
export const dataProduct5: Product = {
  image: "https://picsum.photos/240",
  name: "Smartwatch",
  price: 199,
  stock: 20,
  brand: "Apple",
  typeId: "15",
  id: "1004",
  description: "Latest model with GPS",
  userId: "114",
}
export const dataProduct6: Product = {
  image: "https://picsum.photos/250",
  name: "Laptop",
  price: 899,
  stock: 15,
  brand: "Dell",
  typeId: "16",
  id: "1005",
  description: "Lightweight and powerful",
  userId: "115",
}
export const dataProduct7: Product = {
  image: "https://picsum.photos/260",
  name: "Headphones",
  price: 150,
  stock: 50,
  brand: "Sony",
  typeId: "17",
  id: "1006",
  description: "Noise-canceling headphones",
  userId: "116",
}
export const dataProduct8: Product = {
  image: "https://picsum.photos/270",
  name: "Gaming Mouse",
  price: 60,
  stock: 40,
  brand: "Logitech",
  typeId: "18",
  id: "1007",
  description: "High precision and customizable",
  userId: "117",
}
export const dataProduct9: Product = {
  image: "https://picsum.photos/280",
  name: "Blender",
  price: 50,
  stock: 25,
  brand: "Philips",
  typeId: "19",
  id: "1008",
  description: "High-speed blender",
  userId: "118",
}
export const dataProduct10: Product = {
  image: "https://picsum.photos/290",
  name: "Electric Kettle",
  price: 30,
  stock: 35,
  brand: "Kenwood",
  typeId: "20",
  id: "1009",
  description: "Fast boiling kettle",
  userId: "119",
}

export const dataProducts: Product[] = [
  dataProduct,
  dataProduct2,
  dataProduct3,
  dataProduct54,
  dataProduct1,
  dataProduct12,
  dataProduct11,
  dataProduct4,
  dataProduct5,
  dataProduct6,
  dataProduct7,
  dataProduct8,
  dataProduct9,
  dataProduct10,
]

export const dataProductDetails: ProductItem[] = [
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
    desc: [
      "Powerful noise-cancelling technology",
      "Wireless Bluetooth connectivity",
      "Long-lasting battery life",
      "Comfortable and adjustable design",
    ],
    desc_spec: [
      {
        title: "Audio",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
      {
        title: "Design",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
    ],
    desc_tech: [
      {
        text: "Powerful noise-cancelling technology",
        title: "Audio",
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
    desc: [
      "Powerful noise-cancelling technology",
      "Wireless Bluetooth connectivity",
      "Long-lasting battery life",
      "Comfortable and adjustable design",
    ],
    desc_tech: [
      {
        text: "Powerful noise-cancelling technology",
        title: "Audio",
      },
    ],
    desc_spec: [
      {
        title: "Audio",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
      {
        title: "Design",
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
    desc: [
      "Powerful noise-cancelling technology",
      "Wireless Bluetooth connectivity",
      "Long-lasting battery life",
      "Comfortable and adjustable design",
    ],
    desc_tech: [
      {
        text: "Powerful noise-cancelling technology",
        title: "Audio",
      },
    ],
    desc_spec: [
      {
        title: "Audio",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
      {
        title: "Design",
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
    desc: [
      "Powerful noise-cancelling technology",
      "Wireless Bluetooth connectivity",
      "Long-lasting battery life",
      "Comfortable and adjustable design",
    ],
    desc_tech: [
      {
        text: "Powerful noise-cancelling technology",
        title: "Audio",
      },
    ],
    desc_spec: [
      {
        title: "Audio",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
      {
        title: "Design",
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
    desc: [
      "Powerful noise-cancelling technology",
      "Wireless Bluetooth connectivity",
      "Long-lasting battery life",
      "Comfortable and adjustable design",
    ],

    desc_tech: [
      {
        text: "Powerful noise-cancelling technology",
        title: "Audio",
      },
    ],
    desc_spec: [
      {
        title: "Audio",
        list: [
          "Powerful noise-cancelling technology",
          "Wireless Bluetooth connectivity",
          "Long-lasting battery life",
          "Comfortable and adjustable design",
        ],
      },
      {
        title: "Design",
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

export const dataTechnicalSpc: DataTechnicalSpec[] = [
  {
    title: "Movement",
    text: "Swiss-made automatic movement with 28,800 vph and 42-hour power reserve.",
  },
  {
    title: "Case",
    text: "Stainless steel case with a diameter of 40mm and a thickness of 12mm.",
  },
  {
    title: "Dial",
    text: "Scratch-resistant sapphire crystal with a silver-tone dial and luminous hands and markers.",
  },
  {
    title: "Strap",
    text: "Genuine leather strap with a deploying buckle closure.",
  },
  {
    title: "Water Resistance",
    text: "Water-resistant up to 100 meters (330 feet).",
  },
  {
    title: "Warranty",
    text: "5-year international warranty.",
  },
]
