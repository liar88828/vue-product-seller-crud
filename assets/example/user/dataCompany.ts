import type { MarketStatic, ProfileMarket } from "~/types/market/ProfileCompany"
export const marketStatic: MarketStatic = {
  follow: 44_234_234_223_429,
  product: 44_234_234_223_429,
  since: new Date(),
  response: "100%",
}

export const marketStaticServer: MarketStatic = {
  follow: 44_234_234_223_429,
  product: 44_234_234_223_429,
  since: new Date(),
  response: "100%",
}

export const dataCompany: ProfileMarket = {
  since: new Date(),
  name: "PT. Orak Genah",
  industry: "Sustainable Clothing Manufacturing",
  address: "Semarang, Central Java, Indonesia",
  description:
    "PT. Orak Genah is a clothing manufacturer based in Semarang, Central Java, Indonesia, specializing in creating high-quality, eco-friendly apparel. We use organic and recycled materials whenever possible, and our production processes are designed to minimize environmental impact.",
  mission:
    "To provide stylish and functional clothing made with sustainable materials, while promoting fair labor practices and minimizing our environmental footprint. We are dedicated to creating beautiful garments that are good for the planet and the people who make them.",
  vision:
    "Our vision is to be a leading sustainable clothing manufacturer, setting new standards for ethical and environmentally conscious production. We aim to inspire and empower our customers to make more sustainable choices in their fashion purchases.",
  history:
    "PT. Orak Genah was founded in 2020 with a passion for sustainable fashion. We are a team of dedicated individuals who believe in creating beautiful clothing that is good for the planet and the people who make it. We partner with local artisans and use traditional techniques whenever possible to preserve cultural heritage.",
  Contact: {
    id: 1,
    email: "johndoe@example.com",
    phone: "081234567890",
    website: "www.orakgenah.com",
  },
  SocialMedia: {
    id: 1,
    instagram: "https://www.instagram.com/orakgenah",
    facebook: "https://www.facebook.com/orakgenah",
    twitter: "https://twitter.com/orakgenah",
    whatsapp: "https://wa.me/6281234567890",
  },
  Additional: [
    {
      id_market: 1,
      id: "We are committed to producing high-quality, eco-friendly clothes that are",
    },
    {
      id_market: 1,

      id: "PT. Orak Genah was founded in 2020 with a passion for sustainable fashion.",
    },
    {
      id_market: 1,

      id: "We are a team of dedicated individuals who believe in creating beautiful clothing that is good for the planet and the people who make it.",
    },
    {
      id_market: 1,
      id: "We partner with local artisans and use traditional techniques whenever possible to preserve cultural heritage.",
    },
  ],
  marketStatic: marketStatic,
  id: 1,
  id_contact: 1,
  id_socialMedia: 1,
  id_user: "1",
  id_follow: 1,
}

//@ts-ignore
export const dataCompanyServer: DataMarketStatus = {
  name: "PT. Orak Genah",

  industry: "Sustainable Clothing Manufacturing",
  address: "Semarang, Central Java, Indonesia",
  description:
    "PT. Orak Genah is a clothing manufacturer based in Semarang, Central Java, Indonesia, specializing in creating high-quality, eco-friendly apparel. We use organic and recycled materials whenever possible, and our production processes are designed to minimize environmental impact.",
  mission:
    "To provide stylish and functional clothing made with sustainable materials, while promoting fair labor practices and minimizing our environmental footprint. We are dedicated to creating beautiful garments that are good for the planet and the people who make them.",
  vision:
    "Our vision is to be a leading sustainable clothing manufacturer, setting new standards for ethical and environmentally conscious production. We aim to inspire and empower our customers to make more sustainable choices in their fashion purchases.",
  history:
    "PT. Orak Genah was founded in 2020 with a passion for sustainable fashion. We are a team of dedicated individuals who believe in creating beautiful clothing that is good for the planet and the people who make it. We partner with local artisans and use traditional techniques whenever possible to preserve cultural heritage.",
  Contact: {
    id: 1,

    email: "johndoe@example.com",
    phone: "081234567890",
    website: "www.orakgenah.com",
  },
  SocialMedia: {
    id: 1,
    instagram: "https://www.instagram.com/orakgenah",
    facebook: "https://www.facebook.com/orakgenah",
    twitter: "https://twitter.com/orakgenah",
    whatsapp: "https://wa.me/6281234567890",
  },
  Additional: [
    {
      id_market: 1,
      id: "We are committed to producing high-quality, eco-friendly clothes that are",
    },
    {
      id_market: 1,
      id: "PT. Orak Genah was founded in 2020 with a passion for sustainable fashion.",
    },
    {
      id_market: 1,
      id: "We are a team of dedicated individuals who believe in creating beautiful clothing that is good for the planet and the people who make it.",
    },
    {
      id_market: 1,

      id: "We partner with local artisans and use traditional techniques whenever possible to preserve cultural heritage.",
    },
  ],

  // marketStatic: marketStatic,
}
