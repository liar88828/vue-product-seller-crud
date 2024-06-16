export type RequiredProperty<T> = {
  [P in keyof T]: Required<NonNullable<T[P]>>
}
export type IfEquals<T, U, Y = unknown, N = never> = (<G>() => G extends T
  ? 1
  : 2) extends <G>() => G extends U ? 1 : 2
  ? Y
  : N
export type IfEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <
  G
>() => G extends U ? 1 : 2
  ? "same"
  : "different"
