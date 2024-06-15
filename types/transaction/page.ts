import type { OrderProps } from "../market/order"
import type { ProfileMarket } from "../market/ProfileCompany"

export type PayProps = {
  company: ProfileMarket
  order: OrderProps
}
