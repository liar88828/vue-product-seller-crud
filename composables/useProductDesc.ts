import type { ProductItem } from "~/types/product/item"

export const useProductDesc = (data: ProductItem["desc"]) => {
  const refEdit = ref(false)
  const multiple = ref(data || [])
  const getText = ref("")

  const onDelete = (i: number) => {
    multiple.value.splice(i, 1)
  }

  const onAdd = () => {
    multiple.value.push(getText.value)
  }
  const onSave = () => {
    refEdit.value = !refEdit.value
    console.log(data)
  }

  return { onAdd, onDelete, onSave, refEdit, multiple, getText }
}
