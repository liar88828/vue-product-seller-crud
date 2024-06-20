import type  { HomeApi } from "~/types/home/props";

export default defineEventHandler(async (event) => {
  console.log(await getUserSession(event))
  const data = {
	// product: dataProducts,
	bestProduct: await control.home.bestProduct(),
	newProduct: await control.home.newProduct(),
	trending: await control.home.trending(),
	// index: await control.home.(),
	toJson(): HomeApi  {
	  // return { data: this.index }
	  return {
		bestProduct: this.bestProduct,
		newProduct: this.newProduct,
		trending: this.trending
	  }
	},
  }
  return data
})
