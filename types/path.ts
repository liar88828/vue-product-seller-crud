import type { RouteLocationNormalizedLoaded } from "vue-router"

// export type GetRoute = RouteLocationNormalizedLoaded & {
//   query: RouteLocationNormalizedLoaded["query"] & {
//     redirectPath: string | undefined
//   }
// }

export type GetRoute<T> = RouteLocationNormalizedLoaded & {
  query: RouteLocationNormalizedLoaded["query"] & T
}

export type GetQuery = GetRoute<{
  redirectPath: string | undefined
}>
