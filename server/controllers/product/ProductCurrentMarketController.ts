import type { H3Event } from "h3"
import type { Product } from "@prisma/client"
import { ProductServices } from "~/server/services/product"
import { tryCatch } from "~/server/lib/tryCatch"

export class ProductCurrentMarketController {
  constructor(
    protected readonly event: H3Event,
    protected readonly service: ProductServices["current"],
    protected readonly sanitize: ProductServices["sanitizeCreate"]
  ) {}

  async all(): Promise<Product[]> {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      const data = await this.service.all({
        id_market: session.id_market,
        id_user: session.id,
      })
      return data
    })
  }

  async id(): Promise<ProductItemServer> {
    const { session } = await getUserSession(this.event)
    const { id } = getRouterParams(this.event)
    const data = await this.service.id({
      id: Number(id),
      id_market: session.id_market,
      id_user: session.id,
    })
    return data
  }

  async delete() {
    return tryCatch(async () => {
      const { id } = getRouterParams(this.event)
      const { session } = await getUserSession(this.event)

      return this.service.delete({
        id: Number(id),
        id_user: session.id,
      })
    })
  }

  async create() {
    console.log("create")

    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      const body = await readBody(this.event)
      const data = this.sanitize(body, {
        id_user: session.id,
        id_market: session.id_market,
      })
      return this.service.create(data)
    })
  }

  async update() {
    return tryCatch(async () => {
      const { session } = await getUserSession(this.event)
      const body = await readBody(this.event)
      const { id } = getRouterParams(this.event)

      const data = this.sanitize(body, {
        id_user: session.id,
        id_market: session.id_market,
      })

      return this.service.update(
        {
          id: Number(id),
          id_user: session.id,
        },
        data
      )
    })
  }
}
