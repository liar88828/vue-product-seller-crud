import IconsUser from "~/components/Icons/User.vue"
import IconsHome from "~/components/Icons/Home.vue"
import IconsShop from "~/components/Icons/Shop.vue"
import IconsMarket from "~/components/Icons/Market.vue"
import Mail from "~/components/Icons/Mail.vue"
import type { ItemIcons } from "~/types/globals/icon"

export const linkMenu: ItemIcons[] = [
  { link: "/home", icon: IconsHome, title: "Home" },
  { link: "/user", icon: IconsUser, title: "User" },
  { link: "/shop/product", icon: IconsShop, title: "Shop" },
  { link: "/market", icon: IconsMarket, title: "Market" },
  { link: "/message", icon: Mail, title: "Message" },
]
