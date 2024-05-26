import IconsMoney from "~/components/Icons/Money.vue"
import IconsColor from "~/components/Icons/Color.vue"
import IconsInfo from "~/components/Icons/Info.vue"
import IconsCardBoardClose from "~/components/Icons/CardBoardClose.vue"
import IconsCategory from "~/components/Icons/Category.vue"
import IconsSort from "~/components/Icons/Sort.vue"
import type { StaticLink } from "~/types/global/StaticLink"
import type { ItemIcons } from "~/types/icon"

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
      { title: "Home & Garden", link: "/home_Garden" },
      { title: "Beauty & Personal Care", link: "/Beauty_Personal_Care" },
      { title: "Sports & Outdoors", link: "/Sports_Outdoors" },
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
    list: [
      {
        title: "Pending",
        link: "/pending",
      },
      {
        title: "Waiting",
        link: "/waiting",
      },
      {
        title: "Delivered",
        link: "/delivered",
      },
      {
        title: "Canceled",
        link: "/canceled",
      },
    ],
  },
}
import IconsBread from "~/components/Icons/Bread.vue"
import IconsChocolate from "~/components/Icons/Choco.vue"
import IconsGrapes from "~/components/Icons/Grapes.vue"
import IconsMilk from "~/components/Icons/Milk.vue"

export const dataCategory: ItemIcons[] = [
  { link: "/shop?category=grapes", icon: IconsGrapes, title: "Grapes" },
  {
    link: "/shop?category=chocolate  ",
    icon: IconsChocolate,
    title: "Chocolate",
  },
  { link: "/shop?category=Milk", icon: IconsMilk, title: "Milk" },
  { link: "/shop?category=Bread", icon: IconsBread, title: "Bread" },
]
