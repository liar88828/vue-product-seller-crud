import IconsHome from "~/components/Icons/Home.vue"
import IconsUser from "~/components/Icons/User.vue"
import IconsInfo from "~/components/Icons/Info.vue"
import IconsChartBar from "~/components/Icons/Chartbar.vue"
import IconsShop from "~/components/Icons/Shop.vue"

export const dataLink = [
  {
    title: "Home",
    link: "/#",
    icon: IconsHome,
    sub: [],
  },
  {
    title: "Shop",
    link: "/shop",
    icon: IconsShop,
    sub: [],
  },
  {
    title: "User",
    link: "/",
    icon: IconsUser,
    sub: [
      {
        title: "Profile",
        link: "/user/#",
        sub: [],
      },
      {
        title: "Trolly",
        link: "/user/trolly",
        sub: [],
      },
      {
        title: "History",
        link: "/user/history",
        sub: [],
      },
    ],
  },

  {
    title: "Table",
    link: "/#",
    icon: IconsChartBar,
    sub: [
      {
        title: "Index",
        link: "/table",
        sub: [],
      },
    ],
  },
  // {
  //   title: "Info",
  //   link: "/#",
  //   icon: IconsInfo,
  //   sub: [
  //     {
  //       title: "Index",
  //       link: "/info",
  //       sub: [],
  //     },
  //   ],
  // },
]
