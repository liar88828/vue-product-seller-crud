export default defineEventHandler(async (event) => {
  const data = {
	// histories: await control.trans.market.all(event),
	histories: await control.market.owner.trans.history.all(event),

	toJson(): {
	  histories: HistoryProps[]
	} {
	  return { histories: this.histories }
	},
  }
  return data
})
