import { ZodError } from "zod"

export default (fn: () => any) => {
  // const zod = (e: unknown) => {
  //   if (e instanceof ZodError) {
  //     // console.log(e)
  //     return e.flatten().fieldErrors
  //   }
  // }

  try {
    return fn()
    // const data = fn()
    // if (data) return data
    // throw fn()
  } catch (e) {
    //  return zod(e)
    if (e instanceof ZodError) {
      // console.log(e)
      return e.flatten().fieldErrors
    }
    return e
  }
}
