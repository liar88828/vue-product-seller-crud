import type { Box } from "@prisma/client"

export class TrolleyService extends SanitizeTrolly {
  // trolly is not buy just add trolly, box, product
  // and not add transaction
  async push(data: BoxCreate): Promise<Box> {
    data = zods.box.create.parse(data)
    console.log(data)

    return prisma.$transaction(async (tx) => {
      const box = await tx.box.findFirst({
        where: {
          id_product: data.id_product,
          id_trolly: data.id_trolly,
        },
      })
      console.log(box)
      if (box) {
        return tx.box.update({
          where: { id: box.id },
          data: {
            qty: { increment: 1 },
          },
        })
      } else {
        return tx.box.create({
          data: {
            price: data.price,
            qty: 1,
            id_product: data.id_product,
            id_trolly: data.id_trolly,
          },
        })
      }
    })
  }

  async _push(data: BoxCreate): Promise<Box> {
    const box = await prisma.box.findFirstOrThrow({
      where: {
        id_product: data.id_product,
        id_trolly: data.id_trolly,
      },
    })

    return prisma.box.upsert({
      where: {
        id_product: data.id_product,
        id_trolly: data.id_trolly,
        id: box.id,
      },
      update: {
        qty: { increment: 1 },
      },
      create: {
        price: data.price,
        qty: 1,
        id_product: data.id_product,
        id_trolly: data.id_trolly,
      },
    })
  }
  async check(id_trolly: number) {
    return db.trolly.check(id_trolly)
  }
  async delete(id: IdBox): Promise<Box> {
    id = zods.box.id.parse(id)
    return db.trolly.delete(id)
  }
  async _all(id: IdTrolly): Promise<TrollyAllService> {
    const trolleys = await db.trolly.all(id)
    const boxs = trolleys.map((trolly) => trolly.Box.map((box) => box))
    const products = boxs.flatMap((box) =>
      box.map((d) => {
        if (d.Product !== null && d.Product !== undefined) {
          return d.Product
        }
      })
    )
    return {
      trolleys,
      boxs,
      //@ts-expect-error
      products,
    }
  }
  async all(id: IdTrolly): Promise<TollyProps[]> {
    return db.trolly.all(id)
  }

  async notify(id: number) {
    id = zods.id.number.parse(id)
    const count = await prisma.box
      .count({
        where: { id_trolly: id },
      })
      .then((data) => {
        if (!data) {
          return 0
        }
        return data
      })

    const data = await prisma.box.findMany({
      where: { id_trolly: id },
    })
    console.log(data)
    return count
  }
}
export const trolleyService = new TrolleyService()
export type ITrolleyService = TrolleyService
