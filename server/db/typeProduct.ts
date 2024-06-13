import { prisma } from "~/server/config/prisma"

export class TypeMutation {
  async create(id: string) {
    return prisma.type
      .upsert({
        where: { id },
        create: { id },
        update: { id },
      })
      .then((data) => data.id)
  }
}

export class TypeDB extends TypeMutation {}
