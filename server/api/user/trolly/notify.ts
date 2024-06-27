export default defineEventHandler(async (event) => {
  const data = {
    trolly: await control.user.product.trolly.notify(event),
    toJson(): { notify: number } {
      return {
        notify: this.trolly,
      }
    },
  }

  return data
})
