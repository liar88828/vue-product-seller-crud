export default defineEventHandler(async (event) => {
  const data = {
    history: await historyController.marketId(event),
    toJson(): { history: HistoryServer } {
      return { history: this.history }
    },
  }
  return data
})
