export default defineEventHandler(async (event) => {
  const data = {
	trolly: await control.user.product.trolly.all(event),
	toJson(): { trolleys: TollyProps[] } {
	  return {
		trolleys: this.trolly,
	  }
	},
  }

  return data
})
