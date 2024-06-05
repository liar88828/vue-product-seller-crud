<script lang="ts" setup>
import { dataLink } from "~/assets/link/navigator/sideLink"
</script>

<template>
  <ul class="menu menu-sm sm:menu-lg bg-base-100 w-52 max-w-6xl min-h-screen">
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
