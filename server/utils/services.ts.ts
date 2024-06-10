import { UserServices } from "../services/user"

class Services {
  user = new UserServices()
}

export const service = new Services()
