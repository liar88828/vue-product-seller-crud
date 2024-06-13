import type { OrderProps } from "../market/order"
import type { ProfileCompany } from "../market/ProfileCompany"

export type PayProps = {
  company: ProfileCompany
  order: OrderProps
}
