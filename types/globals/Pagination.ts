export type CheckOther<T> = T extends null ? {} : T
export type Pagination<T = null> = {
  id_user: string
  page: number
  search: string
  other: CheckOther<T>
}

const test: Pagination<{ type: string; order: number }> = {
  id_user: "1",
  page: 0,
  search: "",
  other: {
    order: 1,
    type: "product",
  },
}

export type keyPage =
  | "message_page"
  | "chat_page"
  | "product_page"
  | "admin_page"
  | "admin_chat_page"
