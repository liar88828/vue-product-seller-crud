<template>
  <CardInit class="card-normal">
    <div class="space-y-2">
      <!-- title -->
      <h1 v-if="!refEdit" class="product-desc-h">
        {{ data.name }}
      </h1>
      <textarea v-else v-model="data.name" class="textarea-edit"></textarea>

      <!-- Description -->
      <p v-if="!refEdit" class="product-desc-p">
        {{ data.description }}
      </p>
      <textarea
        v-else
        v-model="data.description"
        class="textarea-edit"
      ></textarea>
    </div>

    <!-- Specifications -->
    <div class="grid gap-4">
      <div
        v-if="!refEdit"
        class="product-desc-li"
        v-for="item in data.desc"
        :key="item"
      >
        <IconsCheck class="w-5 h-5 fill-primary" />

        <span>{{ item }}</span>
      </div>
    </div>

    <!-- Multi Form -->
    <div v-if="refEdit" class="grid gap-4">
      <div class="join">
        <input
          v-model="getText"
          placeholder="Add Text"
          class="input input-bordered join-item w-full"
        />
        <button @click="onAdd" class="btn btn-primary join-item">
          <IconsPlus class="icons" />
        </button>
      </div>
      <div class="join" v-for="(d, index) in multiple">
        <input :placeholder="d" class="input join-item w-full" />
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
import type { ProductItem } from "~/types/product/item"
const props = defineProps<{ data: ProductItem }>()
const { getText, multiple, refEdit, onAdd, onDelete, onSave } = useProductDesc(
  props.data.desc
)
</script>
