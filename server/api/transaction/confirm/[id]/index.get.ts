import { confirmController } from "~/server/controllers/confirm.controller"

export default defineEventHandler(async (event) => {
  const data = {
    confirm: await confirmController.id(event),
    toJson() {
      return this.confirm
    },
  }
  return data
})
