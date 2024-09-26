// import type { DataImage } from "~/assets/example/product/image"
import type { DataImage, ProductDetailServer } from "~/types/product/item"

// export const useImageSelect = (data: DataImage[]) => {
export const useImageSelect = (data: ProductItemServer["Img"]) => {
  const selectImage = ref("")
  const imageRender = computed(() => {
    if (selectImage.value === "") {
      return data[0].img ?? "https://picsum.photos/220"
    } else {
      return selectImage.value
    }
  })
  return {
    selectImage,
    imageRender,
  }
}
