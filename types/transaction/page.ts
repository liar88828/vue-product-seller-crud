import type { OrderProps } from "../market/order"
import type { ProfileCompany } from "../profile/profile"

export type PayProps = {
  company: ProfileCompany
  order: OrderProps
}
