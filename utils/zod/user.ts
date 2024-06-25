import { ZodType, z } from "zod"
import type { SignInProps, SignUpProps } from "~/types/auth/user"
import type { UserCreate } from "~/types/user/ControlCreateUser"

const signUp = z
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

const signIn = z.object({
  email: z.string().email().min(10),
  password: z.string().min(8),
}) satisfies ZodType<SignInProps>

const create = z.object({
  id_market: z.number(),
  name: z.string().nullable(),
  phone: z.string().nullable(),
  email: z.string(),
  password: z.string(),
  address: z.string().nullable(),
  id_role: z.string(),
  id_trolly: z.number(),
  id_follow: z.number(),
  id_like: z.number(),
}) satisfies ZodType<UserCreate>

const otpSchema = z.object({
  OTP: z.string().min(6),
  id_user: z.string(),
})

export const zodUser = {
  signUp,
  signIn,
  create,
  otpSchema,
}
