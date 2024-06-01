import type { ProductItem } from "~/types/product/item"

export const useProductSpec = (data: ProductItem["desc_spec"]) => {
  const refEdit = ref(false)
  const multiple = ref(data || [])

  const getText = reactive<{
    title: string
    text: string
    list: string[]
  }>({
    title: "",
    text: "",
    list: [],
  })

  //

  const onAddItem = () => {
    getText.list.push(getText.text)
  }

  const onDeleteItem = (i: number) => {
    getText.list.splice(i, 1)
  }

  //
  const onDelete = (i: number) => {
    multiple.value.splice(i, 1)
  }

  const onAdd = () => {
    multiple.value.push({
      title: getText.title,
      list: getText.list,
    })
    getText.title = ""
    getText.list = []
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
    onAddItem,
    onDeleteItem,
  }
}
