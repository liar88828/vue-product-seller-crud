<script setup lang="ts">
import Bell from "../Icons/Bell/index.vue"
</script>

<template>
  <div class="dropdown dropdown-end">
    <DropDownIcon index="9" indicator="2" :icon="Bell" />
    <ul
      tabindex="9"
      class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <button>
          <IconsPersonBook class="w-5 h-5" />
          Sign In
        </button>
      </li>
      <li>
        <button>
          <IconsPersonEdit class="w-5 h-5" />
          Sign Up
        </button>
      </li>
      <li>
        <button>
          <IconsExit class="w-5 h-5" />
          Sign Out
        </button>
      </li>
    </ul>
  </div>
</template>
