export default defineEventHandler(async (event) => {
  const data = {
    // histories: await control.trans.market.all(event),
    histories: await historyController.all(event),

    toJson(): {
      histories: HistoryServer[]
    } {
      return { histories: this.histories }
    },
  }
  return data
})
