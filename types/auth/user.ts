import type { z } from "zod"

export type SignUpProps = {
  name: string
  email: string
  password: string
  confPass: string
}

export type SignUpErrorZod = z.inferFlattenedErrors<
  typeof signUp
>["fieldErrors"]

export type SignInProps = {
  email: string
  password: string
}

export type ErrZod<T> = {
  success: boolean
  pending: boolean
  msg: string
  data: T
}

export type GetTry<T> = ErrZod<T>
