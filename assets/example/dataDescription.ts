import type { ProductItem } from "~/types/product/item"

export const dataProductDetail: ProductItem = {
  name: "High-Quality Noise-Cancelling Headphones",
  description:
    "Experience the ultimate in audio immersion with our premium noise-cancelling headphones. Crafted with the finest materials and advanced technology, these headphones deliver unparalleled sound quality and comfort for the discerning listener.",
  brand: "Apple",
  id: "1",
  image: "https://picsum.photos/220",
  price: 199.99,
  stock: 10,
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
        "Adjustable, padded headband",
        "Soft, memory foam ear cups",
        "Foldable for easy storage",
      ],
    },
    {
      title: "Connectivity",
      list: ["Bluetooth 5.0", "Wireless range: 30ft (10m)", "USB-C charging"],
    },
    {
      title: "Battery",
      list: [
        "Up to 30 hours of playtime",
        "Quick charge: 5 minutes for 2 hours of playback",
      ],
    },
  ],
}
