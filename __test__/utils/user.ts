import { prisma } from "~/server/config/prisma"

export async function findUserByEmail(email: string) {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  })
}

export async function deleteUserByEmail(email: string) {
  await prisma.user.delete({
    where: {
      email,
    },
  })
}

export async function afterTestUser(user: SessionUser) {
  const found = await findUserByEmail(user.email)
  if (found) {
    await deleteUserByEmail(user.email)
  }
}
