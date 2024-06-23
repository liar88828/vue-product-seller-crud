import type { Desc } from "@prisma/client"

export const useDesc = (
  data: ProductItemServer["Desc"],
  id_product: number
) => {
  const refEdit = ref(false)
  const multiple = ref(data || [])
  const store = reactive<Desc>({
    id_product,
    text: "",
  })

  const onDelete = (i: number) => {
    multiple.value.splice(i, 1)
  }

  const onAdd = () => {
    multiple.value.push({
      id_product,
      text: store.text,
    })
    store.text = ""
  }
  const onSave = () => {
    refEdit.value = !refEdit.value
    console.log(data)
  }

  return { onAdd, onDelete, onSave, refEdit, multiple, store }
}
