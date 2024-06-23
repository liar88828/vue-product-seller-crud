export default defineEventHandler(async (event) => {
  const data = {
	product: await control.product.market.current.update(event),

	toJSON() {
	  return {
		product: this.product,
	  }
	},
  }
  return data
})
