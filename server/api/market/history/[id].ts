export default defineEventHandler(async (event) => {
  const data = {
    history: await historyController.marketHistoryId(event),
    toJson(): { history: HistoryServer } {
      return { history: this.history }
    },
  }
  return data
})
