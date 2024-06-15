import type { Box, Package } from "@prisma/client"

export type Remove<T> = Omit<T, "id">

export type GetBoxReturn = Remove<Box>
export type GetPackageReturn = Remove<Package>

export type GetBoxProps = Omit<Box, "id" | "trollyId">
// export type PushTrolly = Omit<Box>
export type GetPackageProps = Omit<Package, "id" | "transactionId">
// {
//   id_product: string
//   amount: number
//   price: number
// }
