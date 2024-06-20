import { ZodError } from "zod"
import type { GetTry } from "~/types/auth/user"

export default <T>(fn: () => any): GetTry<T> => {
  // const zod = (e: unknown) => {
  //   if (e instanceof ZodError) {
  //     // console.log(e)
  //     return e.flatten().fieldErrors
  //   }
  // }

  try {
	return {
	  success: true,
	  pending: true,
	  msg: "",
	  data: fn() as T,
	}
	// const data = fn()
	// if (data) return data
	// throw fn()
  } catch (e) {
	//  return zod(e)
	if (e instanceof ZodError) {
	  console.log(e,' from zod ')
	  return {
		msg: "",
		success: false,
		pending: false,
		data: e.flatten().fieldErrors as T,
	  }
	}
	return e as any
  }
}
