import { toJpeg } from "html-to-image"
import { ref } from "vue"
export const useImages = (title: string) => {
  //@ts-ignore
  const refImage = ref<HTMLDivElement>()

  const clickImage = () => {
    if (refImage.value === null) {
      return
    }
    // console.log(refImage.value)
    //@ts-ignore
    toJpeg(refImage.value, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = `${title}_${new Date()}.jpeg`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    refImage,
    clickImage,
  }
}
