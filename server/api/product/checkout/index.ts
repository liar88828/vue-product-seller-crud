import type { TrollyAllService } from "~/types/transaction/trolly"

export default defineEventHandler(async (event) => {
  const data = {
	trolly: await control.user.product.trolly._all(event),
	toJson(): { trolleys: TrollyAllService } {
	  return {
		trolleys: this.trolly,
	  }
	},
  }

  return data
})
