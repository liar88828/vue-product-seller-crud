export default defineEventHandler(async (event) => {
  const data = {
    // histories: await control.trans.market.all(event),
    histories: await historyController.allHistory(event),

    toJson(): HistoryServer[] {
      return this.histories
    },
  }
  return data
})
