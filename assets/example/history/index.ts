import { exampleTrolley } from "../trolley"

const exampleUser: TransClient["User"] = {
  activeOnline: false,
  address: "123 Main St, City, Country",
  createMarket: true,
  email: "user@example.com",
  id: "12345",
  name: "John Doe",
  OTP: null,
  password: "hashed_password_here",
  phone: "+1234567890",
  role: "admin",
}

export const exampleHistoryIndex: TransClient[] = [
  {
    Market: exampleMarket,
    Trolley: [exampleTrolley],
    User: exampleUser,
    createdAt: new Date().toString(),
    dateExp: new Date().toString(),
    discount: 20,
    drop_address: "semarang",
    id: 3,
    id_buyer: "1",
    id_market: 1,
    promoCode: "FASDFSD5756",
    status: "Cancelled",
    updatedAt: new Date().toString(),
  },
]
