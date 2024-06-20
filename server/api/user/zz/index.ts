const router = createRouter()

router.get(
  "/",
  defineEventHandler(async (event) => {
    console.log("test")
    const { session } =  await getUserSession(event)
    const data = {
      user: await db.user.findId(session.id),
      toJson() {
        return this.user
      },
    }
    return data
  })
)

let num: number = 1
router.get(
  "/:id",
  defineEventHandler(async (event) => {
    const { session } =  await getUserSession(event)

    const data = {
      user: await db.user.findId(session.id),
      toJson() {
        return this.user
      },
    }
    return data
  })
)

router.delete(
  "/",
  defineEventHandler(async (event) => {
    return "delete"
  })
)
export default useBase("/api/user", router.handler)
