import type { ProductItem } from "~/types/product/item"

export const useProductTech = (data: ProductItem["desc_tech"]) => {
  const refEdit = ref(false)
  const multiple = ref(data || [])
  const getText = reactive<{
    title: string
    text: string
  }>({
    title: "",
    text: "",
  })

  const onDelete = (i: number) => {
    multiple.value.splice(i, 1)
  }

  const onAdd = () => {
    multiple.value.push({
      title: getText.title,
      text: getText.text,
    })
    getText.title = ""
    getText.text = ""
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
    getText,
  }
}
