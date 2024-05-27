import IconsUser from "~/components/Icons/User.vue"
import IconsHome from "~/components/Icons/Home.vue"
import IconsShop from "~/components/Icons/Shop.vue"
import IconsSell from "~/components/Icons/Sell.vue"
import IconsMarket from "~/components/Icons/Market.vue"
import type { ItemIcons } from "~/types/globals/icon"

export const linkMenu: ItemIcons[] = [
  { link: "/home", icon: IconsHome, title: "Home" },
  { link: "/shop", icon: IconsShop, title: "Shop" },
  // { link: "/sell", icon: IconsSell, title: "Sell" },
  { link: "/market", icon: IconsMarket, title: "Market" },
  { link: "/user", icon: IconsUser, title: "User" },
]
