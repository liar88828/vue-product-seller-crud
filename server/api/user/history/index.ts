export default defineEventHandler(async (event) => {
  const data = {
    histories: await control.user(event).trans.history.all(),
    toJson(): { histories: HistoryProps[] } {
      return {
        histories: this.histories,
      }
    },
  }
  return data
})
