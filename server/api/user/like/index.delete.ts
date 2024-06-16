export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const data = {
    like: await db.like.unLike(session.id_like as number),

    toJson() {
      return this.like
    },
  }
  return data
})