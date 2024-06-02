<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost">
      <IconsSetting class="h-5 w-5" />
      <p class="hidden sm:block">Client</p>
    </div>
    <ul
      tabindex="0"
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
