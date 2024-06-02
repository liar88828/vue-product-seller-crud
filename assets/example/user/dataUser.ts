import type { User } from "@prisma/client"

export const userProfile: User = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "08123456-7890",
  address: "123 Main St, Anytown, USA 12345",
  id: "user_1",
  roleId: "ADMIN",
  trollyId: "trolly_1",
}

export const userProfile2: User = {
  name: "Jane Does",
  email: "johndoe@example.com",
  phone: "08123456-7890",
  address: "123 Main St, Anytown, USA 12345",
  id: "user_1",
  roleId: "ADMIN",
  trollyId: "trolly_1",
}
