// can edit market profile // for admin
//find by id
// use session user
// return market profile
//
export default defineEventHandler(async (event) => {
  const data = {
    profile: control.market(event).owner.update(),

    toJson() {
      return this.profile
    },
  }
  return data
})
