export type NotifyProps = {
  class?: string
  title?: string
  count?: number
  read?: boolean
}
export type NotifyMessage = {
  type: string
  name: string
  link: string
  time: Date
  id: string
  read: boolean
  img: string
  msg: string
}
