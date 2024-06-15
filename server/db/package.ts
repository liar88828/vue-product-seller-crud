import type { Box, Package, Trolly, User } from "@prisma/client"
import type { GetBoxReturn } from "~/types/transaction/GetBox"
import { prisma } from "~/server/config/prisma"
import { BoxCreate } from "~/types/transaction/trolly"

export class PackageDBMutation {}

export class PackageDB extends PackageDBMutation {
  packageProduct = (data: Package[]) => {
    return prisma.package.createMany({
      data: data,
    })
  }
}
