import type { KeyObject } from "./generic"

export type StoreBase<T> = {
  msg?: string | null
  success?: boolean
  pending: boolean
  data: T
  error: KeyObject<T>
}
