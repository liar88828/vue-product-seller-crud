<template>
  <Card>
    <CardBody>
      <CardTitle>Create</CardTitle>
      <form
        @submit.prevent="handleSubmit"
        class="grid grid-cols-1 md:grid-cols-2 md:gap-5"
      >
        <div class="">
          <ElInput
            v-model:input="store.data.name"
            types="text"
            :title="'Name'"
            :err="store.error.name"
          />
          <ElInput
            v-model:input="store.data.address"
            types="text"
            :title="'Address'"
            :err="store.error.address"
          />
          <ElInput
            v-model:input="store.data.industry"
            types="text"
            :title="'Type Industry'"
            :err="store.error.industry"
          />
          <ElInput
            v-model:input="store.data.vision"
            types="text"
            :title="'Vision'"
            :err="store.error.vision"
          />
          <ElInput
            v-model:input="store.data.mission"
            types="text"
            :title="'Mission'"
            :err="store.error.mission"
          />
        </div>
        <div class="">
          <ElInput
            v-model:input="store.data.since"
            types="Date"
            :title="'Type Since'"
            :err="store.error.since"
          />
          <ElTextarea
            :title="'Description'"
            :err="store.error.description"
            v-model:textarea="store.data.description"
          />
          <ElTextarea
            :title="'History'"
            :err="store.error.history"
            v-model:textarea="store.data.history"
          />
          <div class="flex flex-col gap-2 mt-4">
            <button
              type="submit"
              :class="['btn btn-primary', store.pending && 'btn-disabled']"
            >
              <ElLoading v-show="store.pending" />
              Create
            </button>

            <p class="text-error text-lg text-center">
              {{ store.msg }}
            </p>
          </div>
        </div>
        <!--button-->
      </form>
    </CardBody>
  </Card>
  <!-- {{ store }} -->
</template>

<script lang="ts" setup>
const { store, handleSubmit } = useMarketProfile()
const { session } = useUserSession()
if (session.value) {
  if (session.value.session.createMarket) {
    await navigateTo("/market/profile")
  }
}
</script>
