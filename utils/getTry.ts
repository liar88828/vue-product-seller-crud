import { ZodError } from "zod"
import type { GetTry } from "~/types/auth/user"
import type { StoreBase } from "~/types/globals/store"

export default <T>(store: StoreBase<T>, fn: () => any) => {
  try {
    return fn() as T
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(e, " from zod ")
      return e.flatten().fieldErrors as T
    }
    return e as any
  }
}
