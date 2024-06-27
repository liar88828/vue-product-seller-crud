// noinspection ExceptionCaughtLocallyJS

import { Prisma } from "@prisma/client"
import { ZodError } from "zod"

export async function tryCatch(fun: () => any) {
  try {
    const data = await fun()
    if (!data) {
      throw data
    }
    return data
  } catch (e) {
    if (e instanceof ZodError) {
      throw e.flatten().fieldErrors
    }
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        throw createError({
          statusCode: 400,
          statusMessage: "Bad Request",
          statusText: "must be unique ",
          message:
            "There is a unique constraint violation, a new user cannot be created with this email",
        })
      }
      if (e.code === "P2025") {
        throw createError({ statusCode: 404, message: "Data not found" })
      }
    }
    console.log(e)
    throw e
  }
}
