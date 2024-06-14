export default defineEventHandler(async (event) => {
  const session = await db.user.first()
  const trolly = await prisma.user
    .findUnique({
      where: { id: session.id },
      select: {
        Trolly: true,
      },
    })
    .then((data) => data?.Trolly?.id)
  const boxTrolly = await prisma.box.findMany({
    where: {
      id_trolly: trolly,
    },
    include: {
      Product: true,
    },
  })
  return {
    trolly,
    boxTrolly,
  }
})
