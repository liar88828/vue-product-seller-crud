<template>
  <button onclick="my_modal_chat.showModal()" class="btn btn-ghost">
    <IconsPersonGroup class="icons" /> Chat
  </button>
  <dialog id="my_modal_chat" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-2xl flex items-center gap-2 m-2">
        <IconsPersonGroup /> Chat
      </h3>
      <div class="flex flex-col max-w-6xl">
        <div class="p-2 join w-full">
          <input
            type="text"
            v-model="searchName"
            placeholder="Search Name ....."
            class="input input-bordered input-sm sm:input-md join-item w-full"
          />

          <button class="join-item btn sm:btn-md btn-sm">
            <IconsSearch />
          </button>
        </div>

        <div class="h-[68vh] overflow-y-scroll shadow">
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
      </div>

      <div class="modal-action">
        <NuxtLink to="/message" class="btn btn-outline">
          <IconsExitApp />
          <span> Exit </span>
        </NuxtLink>
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
const { formatRupiah } = useFormat()

const filterCase = reactive<{
  category: string
  sort: string
  brand: string
  price: {
    min: number
    max: number
  }
}>({
  category: "",
  sort: "",
  brand: "",
  price: {
    min: 0,
    max: 0,
  },
})

const isMore = (text: string) => text.length > 1

const dataFilter = {
  category: ["Chocolate", "Grapes", "Milk", "Bread"],
  sort: ["Asc", "Desc"],
  brand: ["BMW", "Gigabyte", "Lenovo", "Asus", "Apple", "Samsung", "Dell"],
  price: {
    min: 0,
    max: 0,
  },
}
// console.log(isMore(filterCase.price.max.toString()))
import { chatPeople } from "~/assets/example/user/chat"

const searchName = ref("")
const filterName = computed(() =>
  chatPeople.filter((d) => {
    // console.log(d.title.toLowerCase().includes(searchName.value.toLowerCase()))
    return d.title.toLowerCase().includes(searchName.value.toLowerCase())
  })
)
</script>
