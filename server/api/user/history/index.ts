export default defineEventHandler(async (event) => {
  const data = {
	histories: await control.user.trans.history.all(event),
	toJson(): { histories: HistoryProps[] } {
	  return {
		histories: this.histories
	  }
	},
  }
  return data
})
