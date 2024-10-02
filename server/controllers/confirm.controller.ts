import type { H3Event } from "h3"
export class ConfirmController {
  constructor(
    private serviceConfirm: IConfirmService,
    private serviceTrolley: ITrolleyService
  ) {}

  private async findTrolleyByIdTransaction(
    event: H3Event
  ): Promise<TrolleyProduct[]> {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    return this.serviceTrolley.findTrolleyProductByIdTransaction(Number(id))
  }
  async marketFindIdTransaction(
    event: H3Event
  ): Promise<TransactionConfirmServer> {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      const { session } = await getUserSession(event)
      return prisma.transaction
        .findUnique({
          include: {
            Market: true,
            Trolley: {
              include: {
                Product: true,
              },
            },
          },
          where: {
            id: Number(id),
          },
        })
        .then((data) => {
          if (!data) {
            throw createError({
              statusCode: 404,
              statusMessage: "Confirm Transaction id not found",
            })
          }
          return data
        })
    })
  }

  async apply(event: H3Event, status: TStatus) {
    const { id } = getRouterParams(event)
    const { session } = await getUserSession(event)
    const { id: id_market } = await getIdMarket(session)

    await this.serviceConfirm.add(
      {
        id: Number(id),
        id_market,
      },
      status
    )
  }

  async allConfirm(event: H3Event): Promise<TransServer[]> {
    const { session } = await getUserSession(event)
    const { id } = await getIdMarket(session)
    return this.serviceConfirm.marketAllConfirm(id)
  }
}

export const confirmController = new ConfirmController(
  confirmService,
  trolleyService
)
