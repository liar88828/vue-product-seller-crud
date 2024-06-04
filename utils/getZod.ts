import type { Product } from "@prisma/client"
import { ZodType, z } from "zod"
import type { SignInProps, SignUpProps } from "~/types/auth/user"

export default () => {
  const createProductSchema = z.object({
    id: z.string(),
    //
    name: z.string(),
    description: z.string(),
    image: z.string(),
    brand: z.string(),
    price: z.number(),
    stock: z.number(),
    //
    userId: z.string(),
    typeId: z.string(),
  }) satisfies ZodType<Product>

  const signUpSchema = z
    .object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(8),
      confPass: z.string().min(8),
    })
    .refine((data) => data.password === data.confPass, {
      message: "Passwords don't match",
      path: ["confirm"],
    }) satisfies ZodType<SignUpProps>

  const signInSchema = z.object({
    email: z.string().email().min(10),
    password: z.string().min(8),
  }) satisfies ZodType<SignInProps>

  return { createProductSchema, signUpSchema, signInSchema }
}
