export default defineEventHandler(async (event) => {
  const data = {
	products: await db.product.findTest(),
	toJson() {
	  return {
		products: this.products
	  }
	}
  }
  return data
})
