export default defineEventHandler(async (event) => {
  const data = {
    // histories: await control.trans.market.all(event),
    histories: await control.market(event).owner.trans.history.all(),

    toJson(): {
      histories: HistoryProps[]
    } {
      return { histories: this.histories }
    },
  }
  return data
})
