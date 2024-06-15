import type { Box } from "@prisma/client"

export type BoxCreate = Omit<Box, "id">
