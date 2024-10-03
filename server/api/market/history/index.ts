export default defineEventHandler(async (event) => {
  const data = {
    // histories: await control.trans.market.all(event),
    histories: await historyController.marketAll(event),

    toJson(): HistoryServer[] {
      return this.histories
    },
  }
  return data
})
