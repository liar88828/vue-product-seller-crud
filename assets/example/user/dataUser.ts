import type { User } from "@prisma/client"

export const userProfile: User = {
  id: "user_1",
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "08123456-7890",
  address: "123 Main St, Anytown, USA 12345",
  // id_role: "ADMIN",
  // id_trolly: 1,
  // id_follow: 1,
  password: "12345678",
  // id_like: 1,
  // id_market: 1,
  createMarket: false,
  activeOnline: true,
  OTP: "123_342",
  role: "USER",
}
