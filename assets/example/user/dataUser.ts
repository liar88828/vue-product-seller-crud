import type { User } from "@prisma/client"

export const userProfile: User = {
  id: "user_1",
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "08123456-7890",
  address: "123 Main St, Anytown, USA 12345",
  id_role: "ADMIN",
  id_trolly: "trolly_1",
  id_follow: 1,
  password: "12345678",
}

export const userProfile2: User = {
  name: "Jane Does",
  email: "johndoe@example.com",
  phone: "08123456-7890",
  address: "123 Main St, Anytown, USA 12345",
  id: "user_1",
  id_role: "ADMIN",
  id_trolly: "trolly_1",
  id_follow: 1,
  password: "12345678",
}
