import type { Tech } from "@prisma/client"

export const useTech = (
  data: ProductItemServer["Tech"],
  id_product: number
) => {
  const refEdit = ref(false)
  const multiple = ref(data || [])
  const store = reactive<Tech>({
    id_product,
    title: "",
    text: "",
  })

  const onDelete = (i: number) => {
    multiple.value.splice(i, 1)
  }

  const onAdd = () => {
    multiple.value.push({
      id_product,
      title: store.title,
      text: store.text,
    })
    store.title = ""
    store.text = ""
  }

  const onSave = () => {
    refEdit.value = !refEdit.value
    console.log(data)
  }

  return {
    onAdd,
    onDelete,
    onSave,
    refEdit,
    multiple,
    store,
  }
}
