<template>
  <div class="flex justify-between">
    <label class="input input-bordered flex items-center gap-2 input-sm">
      <input type="text" class="grow" placeholder="Search" />
      <IconsSearch />
    </label>

    <button class="btn btn-info btn-sm">Create</button>

    <select class="select select-bordered select-sm">
      <option disabled selected>Category?</option>
      <option>Fruit</option>
      <option>Bread</option>
      <option>Milk</option>
      <option>Chocolate</option>
    </select>

    <select class="select select-bordered select-sm">
      <option disabled selected>Stock?</option>
      <option>Low</option>
      <option>High</option>
    </select>

    <select class="select select-bordered select-sm">
      <option disabled selected>Price?</option>
      <option>Low</option>
      <option>High</option>
    </select>
  </div>
</template>
