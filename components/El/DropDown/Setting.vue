<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost">
      <IconsSetting class="icons" />
    </div>
    <ul
      tabindex="0"
      class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <NuxtLink :to="{ name: 'auth-sign-in' }">
          <IconsPersonBook class="w-5 h-5" />
          Sign In
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'auth-sign-up' }">
          <IconsPersonEdit class="w-5 h-5" />
          Sign Up
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'auth-sign-out' }">
          <IconsExit class="w-5 h-5" />
          Sign Out
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
