export class PreviewDB {
  async findUser({ id }: Pick<IdProduct, "id">): Promise<UserPreviewServer[]> {
    return prisma.preview.findMany({
      include: {
        User: true,
      },
      where: {
        id_product: id,
      },
    })
  }
}
