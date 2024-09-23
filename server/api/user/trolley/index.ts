export default defineEventHandler(async (event) => {
  const data = {
    trolleys: await trolleyController.all(event),
    toJson(): { trolleys: NewTolleyProps[] } {
      return {
        trolleys: this.trolleys,
      }
    },
  }

  return data
})
