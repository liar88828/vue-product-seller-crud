import { UserDB } from "~/server/db/user"

class DB {
  user = new UserDB()
}

export const db = new DB()
