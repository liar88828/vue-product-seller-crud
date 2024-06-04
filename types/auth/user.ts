export type SignUpProps = {
  name: string
  email: string
  password: string
  confPass: string
}

export type SignInProps = {
  email: string
  password: string
}

export type ErrZod<T> = {
  success: boolean
  data: T
}

export type GetTry<T> = ErrZod<T>
