<template>
  <article class="card bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Add New Product</h2>
      <form class="grid grid-cols-1 gap-6">
        <div>
          <label for="name" class="block font-medium mb-2">
            Product Name
          </label>
          <input
            id="name"
            class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring"
            placeholder="Enter product name"
            type="text"
          />
        </div>
        <div>
          <label for="description" class="block font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring"
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div>
          <label for="price" class="block font-medium mb-2"> Price </label>
          <input
            id="price"
            class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring"
            placeholder="Enter product price"
            type="number"
          />
        </div>
        <div>
          <label for="image" class="block font-medium mb-2 cursor-pointer">
            <div
              class="flex items-center justify-center w-full border-2 border-dashed rounded-md py-12 px-6 transition-colors hover:border-blue-500 hover:bg-gray-100"
            >
              <svg
                class="h-12 w-12 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span class="ml-4">Upload product image</span>
            </div>
            <input id="image" class="hidden" type="file" />
          </label>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  </article>
</template>
