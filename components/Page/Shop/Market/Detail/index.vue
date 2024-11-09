<template>
  <section class="space-y-3">
    <Profile :profile="data" />
    <section class="card card-compact bg-base-100">
      <div class="card-body">
        <div role="tablist" class="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab text-nowrap"
            aria-label="Best Product"
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box mt-2"
          >
            <BestProduct :profile="data" />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab text-nowrap"
            aria-label="New Product"
            checked
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box mt-2"
          >
            <NewProduct :profile="data" />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab text-nowrap"
            aria-label="Discount"
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box mt-2"
          >
            <Discount :profile="data" />
          </div>
        </div>
      </div>
    </section>

    <!--
     <Discount />
    <BestProduct /> -->
  </section>
</template>

<script lang="ts" setup>
import BestProduct from "./BestProduct.vue"
import Discount from "./Discount.vue"
import NewProduct from "./NewProduct.vue"
import Profile from "./Profile.vue"
// import BestProduct from "./BestProduct.vue"
// import NewProduct from "./NewProduct.vue"
// import Discount from "./Discount.vue"
defineProps<{ data: MarketClient }>()
</script>
