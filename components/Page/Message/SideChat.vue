<script lang="ts" setup>
import { chatPeople } from "~/assets/example/user/chat"

const searchName = ref("")
const filterName = computed(() =>
  chatPeople.filter((d) => {
    // console.log(d.title.toLowerCase().includes(searchName.value.toLowerCase()))
    return d.title.toLowerCase().includes(searchName.value.toLowerCase())
  })
)
</script>

<template>
  <div class="flex flex-col bg-base-200 w-52 max-w-6xl">
    <div class="p-2 join w-fit">
      <button class="join-item btn btn-info sm:btn-md btn-sm w-fit">
        <IconsSide />
      </button>
      <input
        type="text"
        v-model="searchName"
        placeholder="Search Name ....."
        class="input input-info w-2/3 input-sm sm:input-md join-item"
      />
    </div>

    <div class="h-[76vh] overflow-y-scroll">
      <ul class="menu menu-sm sm:menu-lg">
        <li v-for="data in filterName" :key="data.title">
          <NuxtLink
            :to="data.link"
            :class="`${$route.path.includes(data.link) ? 'active' : ''}
        `"
          >
            <div class="avatar">
              <div class="mask mask-squircle w-10 h-10">
                <img :src="data.img" :alt="data.title" class="avatar" />
              </div>
            </div>
            {{ data.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="flex justify-center mt-5">
      <NuxtLink to="/message" class="btn btn-outline">
        <IconsExitApp />
        <span> Exit </span>
      </NuxtLink>
    </div>
  </div>
</template>
