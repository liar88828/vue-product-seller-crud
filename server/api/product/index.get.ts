import { db } from "~/server/db"

export default defineEventHandler(async (event) => {
  return db.user.findAll()
})
