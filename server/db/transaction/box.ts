import { prisma } from "~/server/config/prisma"
import type { Box } from "@prisma/client"

export class BoxDBMutation {
  test(text: string) {
    return text
  }
}

export class BoxDB extends BoxDBMutation {
  boxMany = (data: Box[]) => {
    return prisma.box.createMany({
      data: data,
    })
  }
}
