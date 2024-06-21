import IconsMoney from "~/components/Icons/Money.vue"
import IconsColor from "~/components/Icons/Color.vue"
import IconsInfo from "~/components/Icons/Info.vue"
import IconsCardBoardClose from "~/components/Icons/CardBoardClose.vue"
import IconsCategory from "~/components/Icons/Category.vue"
import IconsSort from "~/components/Icons/Sort.vue"
import IconsBread from "~/components/Icons/Bread.vue"
import IconsChocolate from "~/components/Icons/Choco.vue"
import IconsGrapes from "~/components/Icons/Grapes.vue"
import IconsMilk from "~/components/Icons/Milk.vue"

import type { StaticLink } from "~/types/globals/StaticLink"
import type { ItemIcons } from "~/types/globals/icon"
import type { TStatus } from "~/types/globals/Status"

export const linkStatus: {
  title: TStatus
  link: string
}[] = [
  {
    title: "PENDING",
    link: "/pending",
  },
  {
    title: "ACCEPTED",
    link: "/Accepted",
  },
  {
    title: "DELIVERED",
    link: "/delivered",
  },
  {
    title: "CANCELED",
    link: "/canceled",
  },
]
export const staticLink = {
  color: {
    icon: IconsColor,
    title: "Color",
    list: [
      { title: "Red", link: "/red" },
      { title: "blue", link: "/blue" },
    ],
  } as StaticLink,

  price: {
    icon: IconsMoney,
    title: "Price",
    list: [
      { title: "High", link: "/high" },
      { title: "Low", link: "/low" },
    ],
  } as StaticLink,

  stock: {
    icon: IconsCardBoardClose,
    title: "Stock",
    list: [
      { title: "High", link: "/high" },
      { title: "Low", link: "/low" },
    ],
  } as StaticLink,

  category: {
    icon: IconsCategory,
    title: "Category",
    list: [
      { title: "Electronics", link: "/electronics" },
      { title: "Clothing", link: "/clothing" },
      { title: "Home ", link: "/home_Garden" },
      { title: "Beauty ", link: "/Beauty_Personal_Care" },
      { title: "Sports ", link: "/Sports_Outdoors" },
    ],
  } as StaticLink,

  sort: {
    icon: IconsSort,
    title: "Sort",
    list: [
      { title: "Asc", link: "/asc" },
      { title: "Desc", link: "/desc" },
    ],
  } as StaticLink,
  status: {
    title: "Status",
    icon: IconsInfo,
    list: linkStatus,
  },
}

export const dataCategory: ItemIcons[] = [
  { link: "/shop?category=grapes", icon: IconsGrapes, title: "Grapes" },
  {
    link: "/shop?category=chocolate  ",
    icon: IconsChocolate,
    title: "Chocolate",
  },
  { link: "/shop?category=Milk", icon: IconsMilk, title: "Milk" },
  { link: "/shop?category=Milk", icon: IconsMilk, title: "Milk" },
  { link: "/shop?category=Milk", icon: IconsMilk, title: "Milk" },
  { link: "/shop?category=Milk", icon: IconsMilk, title: "Milk" },
  { link: "/shop?category=Bread", icon: IconsBread, title: "Bread" },
]
