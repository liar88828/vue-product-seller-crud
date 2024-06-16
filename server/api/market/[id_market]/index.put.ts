// can edit market profile // for admin
//find by id
// use session user
// return market profile
//
import { dataCompany } from "~/assets/example/user/dataCompany"
import type { TRole } from "~/types/globals/Status"
export default defineEventHandler(async (event) => {
  const role: TRole = "ADMIN"
  const id = getRouterParams(event).id
  const body = await readBody(event)

  const data = {
    profile: control.market.update(id, body),

    toJson() {
      return this.profile
    },
  }
  return data
})
