export default defineEventHandler(async (event) => {
  const data = {
    trolly: await control.user(event).trolly.all(),
    toJson(): { trolleys: TollyProps[] } {
      return {
        trolleys: this.trolly,
      }
    },
  }

  return data
})
