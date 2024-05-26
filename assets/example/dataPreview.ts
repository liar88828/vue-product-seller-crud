import type { DataPreviewProps } from "~/types/product/DataReview"

export const dataPreview: DataPreviewProps = {
  name: "Alex",
  time: new Date(),
  text: "These headphones are amazing! The noise cancellation is top-notch and the sound quality is incredible. Highly recommend for anyone looking for a premium audio experience.",
  img: "https://picsum.photos/200",
}

export const dataPreview2: DataPreviewProps = {
  name: "John",
  time: new Date(),
  text: "These headphones are amazing! The noise cancellation is top-notch and the sound quality is incredible. Highly recommend for anyone looking for a premium audio experience.",
  img: "https://picsum.photos/200",
}
export const dataPreviews: DataPreviewProps[] = [dataPreview, dataPreview2]
