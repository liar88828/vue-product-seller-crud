export class ConfirmService extends HistoryService {
  async id({ id, id_market }: IdMarketTrans) {
    return prisma.transaction.findUnique({
      where: { id, id_market },
    })
  }
  async add({ id, id_market }: IdMarketTrans, status: TStatus) {
    return prisma.transaction.update({
      where: { id, id_market },
      data: { status },
    })
  }
}

export const confirmService = new ConfirmService()
export type IConfirmService = ConfirmService
