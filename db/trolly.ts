import type { Box, Trolly, User } from "@prisma/client"
import type { GetBoxProps } from "~/types/GetBox"
import { prisma } from "~/config/prisma"
import { control } from "~/export/control"

export class TrollyMutation {
  async createTrolly(id: string, box: GetBoxProps[]) {
    await control.check.trolly(id)

    const trolly = await prisma.trolly.create({
      data: { User: { connect: { id } } },
    })

    const boxs = await prisma.box.createMany({
      data: control.buy.getBox(trolly.id, box),
    })
    return { trolly, boxs }
  }
}

export class TrollyDB extends TrollyMutation {
  async myNotify(id: string, page: number): Promise<number> {
    return prisma.trolly.count({
      where: {
        User: {
          id,
        },
      },
    })
  }

  async myTrolly(id: string, page: number): Promise<MyTrollyReturn> {
    return prisma.trolly.findMany({
      include: { User: true, Box: true },
      where: {
        User: {
          id,
        },
      },
      take: 100,
      skip: page * 100,
    })
  }
}

export type MyTrollyReturn = (Trolly & {
  User: User | null
  Box: Box[]
})[]
