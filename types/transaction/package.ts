import type { Box } from "@prisma/client"

export type PackageCreate = {
  box: Box[]
  // user:User
}

export type CheckTransaction = {
  id_user: string
  drop_address: string | null
  id_status: string
}
