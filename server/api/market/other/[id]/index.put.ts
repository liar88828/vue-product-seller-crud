// can edit market profile // for admin
//find by id
// use session user
// return market profile
//
export default defineEventHandler(async (event) => {
  const data = {
    profile: marketController.marketUpdate(event),

    toJson() {
      return this.profile
    },
  }
  return data
})
