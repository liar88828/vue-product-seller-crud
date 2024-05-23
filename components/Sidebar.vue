<script lang="ts" setup>
import IconsHome from "~/components/Icons/Home.vue"
import IconsUser from "~/components/Icons/User.vue"
import IconsInfo from "~/components/Icons/Info.vue"
import IconsChartBar from "~/components/Icons/Chartbar.vue"

const dataLink = [
  {
    title: "Home",
    link: "/#",
    icon: IconsHome,
    sub: [],
  },
  {
    title: "Shop",
    link: "/shop",
    icon: IconsHome,
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
  {
    title: "Info",
    link: "/#",
    icon: IconsInfo,
    sub: [
      {
        title: "Index",
        link: "/info",
        sub: [],
      },
    ],
  },
]
import { useRoute } from "vue-router"
const hiddenList = [
  // "shop",
  "sell",
]
const $route = useRoute()
function isShopOrSellRoute() {
  const paths = $route.path
  return hiddenList.some((segment) => paths.includes(segment))
}

// console.log(isShopOrSellRoute())

const conditionalClasses = isShopOrSellRoute() ? "hidden" : "hidden sm:block"
</script>

<template>
  <ul
    :class="`  menu menu-sm sm:menu-lg bg-base-200 rounded-lg  w-52 max-w-6xl ${conditionalClasses}
    `"
  >
    <li v-for="data in dataLink" :key="data.title">
      <NuxtLink
        v-if="data.sub.length === 0"
        :to="data.link"
        :class="`${$route.path.includes(data.link) ? 'active' : ''}
        `"
      >
        <component :is="data.icon" /> {{ data.title }}
      </NuxtLink>
      <!--  -->
      <details open v-if="data.sub.length > 0">
        <summary><component :is="data.icon" /> {{ data.title }}</summary>
        <ul>
          <li v-for="subLink in data.sub" :key="subLink.title">
            <NuxtLink
              :to="subLink.link"
              :class="`${$route.path.includes(subLink.link) ? 'active' : ''}`"
            >
              {{ subLink.title }}
            </NuxtLink>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>
<!-- <li>
  <details open>
    <summary><IconsUser /> User</summary>
    <ul>
      <li>
        <NuxtLink
          to="/user"
          :class="`${$route.path.includes('/user') ? 'active' : ''}`"
        >
          Profile
        </NuxtLink>
      </li>
      <li>
        <a> Trolly</a>
      </li>
      <li>
        <a> History</a>
      </li>
    </ul>
  </details>
</li>
<li>
  <details open>
    <summary>Table</summary>
    <ul>
      <li>
        <a> Index</a>
      </li>
    </ul>
  </details>
</li>
<li>
  <details open>
    <summary>Info</summary>
    <ul>
      <li>
        <a> Index</a>
      </li>
    </ul>
  </details>
</li> -->
