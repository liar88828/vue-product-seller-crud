export default defineEventHandler(async (event) => {
  const data = {
    preview: await productController.preview(event),

    toJson(): { preview: UserPreviewServer[] } {
      return { preview: this.preview }
    },
  }
  return data
})
