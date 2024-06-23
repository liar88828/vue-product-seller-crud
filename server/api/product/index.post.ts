export default defineEventHandler(async (event) => {
  const data = {
	// product: dataProductDetails,
	product: await control.product.market.current.create(event),

	toJSON() {
	  return {
		product: this.product,
	  }
	},
  }
  return data
})
