import type { List_Spec } from "@prisma/client"
import type { SpecProduct } from "~/types/product/item"

export const useSpec = (
  data: ProductItemServer["Spec"],
  id_product: number
) => {
  const refEdit = ref(false)
  const multiple = ref(data || [])

  const store = reactive<
    RequiredProperty<
      SpecProduct & {
        listArray: List_Spec
      }
    >
  >({
    id_product,
    title: "",
    List: [
      {
        specTitle: "",
        text: "",
      },
    ],
    listArray: {
      specTitle: "",
      text: "",
    },
  })

  const onAddItem = () => {
    store.List.push({
      specTitle: "",
      text: "",
    })
    // store.listArray.text = ""
    // store.listArray.specTitle = ""
  }

  const onDeleteItem = (i: number) => {
    store.List.splice(i, 1)
  }

  //
  const onDelete = (i: number) => {
    multiple.value.splice(i, 1)
  }

  const onAdd = () => {
    multiple.value.push({
      id_product,
      title: store.title,
      List: store.List,
    })
    store.title = ""
    store.List = []
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
    onAddItem,
    onDeleteItem,
  }
}
