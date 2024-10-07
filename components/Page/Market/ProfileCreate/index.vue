<template>
  <Card>
    <CardBody>
      <CardTitle>Create</CardTitle>
      <form
        @submit.prevent="onCreate"
        class="grid grid-cols-1 md:grid-cols-2 md:gap-5"
      >
        <div class="">
          <ElInput
            v-model:input="storeCreate.data.name"
            types="text"
            :title="'Name'"
            :err="storeCreate.error.name"
          />
          <ElInput
            v-model:input="storeCreate.data.address"
            types="text"
            :title="'Address'"
            :err="storeCreate.error.address"
          />
          <ElInput
            v-model:input="storeCreate.data.industry"
            types="text"
            :title="'Type Industry'"
            :err="storeCreate.error.industry"
          />
          <ElInput
            v-model:input="storeCreate.data.vision"
            types="text"
            :title="'Vision'"
            :err="storeCreate.error.vision"
          />
          <ElInput
            v-model:input="storeCreate.data.mission"
            types="text"
            :title="'Mission'"
            :err="storeCreate.error.mission"
          />
        </div>
        <div class="">
          <ElInput
            v-model:input="storeCreate.data.since"
            types="Date"
            :title="'Type Since'"
            :err="storeCreate.error.since"
          />
          <ElTextarea
            :title="'Description'"
            :err="storeCreate.error.description"
            v-model:textarea="storeCreate.data.description"
          />
          <ElTextarea
            :title="'History'"
            :err="storeCreate.error.history"
            v-model:textarea="storeCreate.data.history"
          />
          <div class="flex flex-col gap-2 mt-4">
            <button
              type="submit"
              :class="[
                'btn btn-primary',
                storeCreate.pending && 'btn-disabled',
              ]"
            >
              <ElLoading v-show="storeCreate.pending" />
              Create
            </button>

            <p class="text-error text-lg text-center">
              {{ storeCreate.msg }}
            </p>
          </div>
        </div>
        <!--button-->
      </form>
    </CardBody>
  </Card>
</template>

<script lang="ts" setup>
const { storeCreate, onCreate } = useMarket()
</script>
