import type { DataImage } from "~/assets/example/product/image"

export const useImageSelect = (data: DataImage[]) => {
  const selectImage = ref("")
  const imageRender = computed(() => {
    if (selectImage.value === "") {
      return data[0].img || "https://picsum.photos/220"
    } else {
      return selectImage.value
    }
  })
  return {
    selectImage,
    imageRender,
  }
}
