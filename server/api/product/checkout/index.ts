import type { TrollyAllService } from "~/types/transaction/trolly"

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } = await getUserSession(event)

  const data = {
	trolly: await control.trolly.all(session.id, id),
	toJson(): { trolleys: TrollyAllService } {
	  return {
		trolleys: this.trolly,
	  }
	},
  }

  return data
})
