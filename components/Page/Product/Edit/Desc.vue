<template>
  <CardInit class="card-normal">
    <div class="space-y-2">
      <!-- title -->
      <h1 v-if="!refEdit" class="product-desc-h">
        {{ data.name }}
      </h1>
      <div v-else>
        <p class="product-desc-h">Title</p>
        <textarea v-model="data.name" class="textarea-edit"></textarea>
      </div>

      <!-- Description -->
      <p v-if="!refEdit" class="product-desc-p">
        {{ data.description }}
      </p>
      <div v-else>
        <p class="product-desc-p">Description</p>
        <textarea v-model="data.description" class="textarea-edit"></textarea>
      </div>
    </div>

    <!-- Specifications -->
    <div class="grid gap-4">
      <div
        v-if="!refEdit"
        class="product-desc-li"
        v-for="item in data.Desc"
        :key="item.text"
      >
        <IconsCheck class="w-5 h-5 fill-primary" />

        <span>{{ item.text }}</span>
      </div>
    </div>

    <!-- Multi Form -->
    <div v-if="refEdit" class="grid gap-4">
      <!-- input -->
      <div class="join">
        <input
          v-model="store.text"
          placeholder="Add Text"
          class="input input-bordered join-item w-full"
        />
        <!-- add -->
        <button @click="onAdd" class="btn btn-primary join-item">
          <IconsPlus class="icons" />
        </button>
      </div>
      <!-- end input -->

      <!-- loop -->
      <div class="join" v-for="(d, index) in multiple">
        <input
          :placeholder="d.text"
          class="input join-item w-full input-disabled"
        />
        <button class="btn btn-error join-item">
          <IconsTrash class="icons" @click="onDelete(index)" />
        </button>
      </div>
    </div>

    <!-- Button -->
    <button v-if="!refEdit" class="btn btn-info" @click="refEdit = !refEdit">
      Edit
    </button>
    <button v-else @click="onSave" class="btn btn-success">Save</button>
  </CardInit>
</template>

<script setup lang="ts">
import { useDesc } from "~/composables/market/product/edit/useDesc"
import type { ProductItemServer } from "~/types/product/item"

const props = defineProps<{ data: ProductItemServer }>()
const { store, multiple, refEdit, onAdd, onDelete, onSave } = useDesc(
  props.data.Desc,
  props.data.id
)
</script>
