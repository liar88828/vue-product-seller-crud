export type NotifyProps = {
  class?: string
  title?: string
  count?: number
  read?: boolean
}

export type TypeMessage =
  | "Message"
  | "Transaction"
  | "Confirm"
  | "User"
  | "Admin"
  | "Select"
export type FilterMessage = { value: TypeMessage; name: string }
