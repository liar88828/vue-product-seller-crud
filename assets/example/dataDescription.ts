import type { ProductItem } from "~/types/product/item"

export const dataDescription: ProductItem = {
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
        "Adjustable, padded headband",
        "Soft, memory foam ear cups",
        "Foldable for easy storage",
      ],
    },
    {
      type: "Connectivity",
      list: ["Bluetooth 5.0", "Wireless range: 30ft (10m)", "USB-C charging"],
    },
    {
      type: "Battery",
      list: [
        "Up to 30 hours of playtime",
        "Quick charge: 5 minutes for 2 hours of playback",
      ],
    },
  ],
}
