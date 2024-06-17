import type { Transaction } from "@prisma/client"

export type CreateTransaction = Omit<
  Transaction,
  "id" | "createdAt" | "updatedAt"
>
