export default defineEventHandler(async (event) => {
  const data = {
    histories: await historyController.marketHistoryAll(event),

    toJson(): HistoryServer[] {
      return this.histories
    },
  }
  return data
})
