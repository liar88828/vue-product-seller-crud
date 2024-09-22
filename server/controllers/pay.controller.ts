export class PayService {
  async idDetail({ id, id_buyer }: IdUserTrans): Promise<DataMarket> {
    const data = await prisma.transaction.findUnique({
      where: { id, id_buyer },
      include: {
        userBuy: true,
        Market: true,
        Box: {
          include: { Product: true },
        },
      },
    })
    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found",
      })
    }
    return data
  }
}
export const payService = new PayService()
export class PayController {
  constructor(private servicePay: PayService) {}
}
export const payController = new PayController(payService)
