import type { H3Event } from "h3"
import type { Product } from "@prisma/client"
import { ProductServices } from "~/server/services/product"
import { tryCatch } from "~/server/lib/tryCatch"

export class ProductCurrentMarketController {
  constructor(
    protected service: ProductServices["current"],
    protected sanitize: ProductServices["sanitizeCreate"]
  ) {}

  async all(event: H3Event): Promise<Product[]> {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const data = await this.service.all({
        id_market: session.id_market,
        id_user: session.id,
      })
      return data
    })
  }

  async id(event: H3Event): Promise<ProductItemServer> {
    const { session } = await getUserSession(event)
    const { id } = getRouterParams(event)
    const data = await this.service.id({
      id: Number(id),
      id_market: session.id_market,
      id_user: session.id,
    })
    return data
  }

  async delete(event: H3Event) {
    return tryCatch(async () => {
      const { id } = getRouterParams(event)
      const { session } = await getUserSession(event)

      return this.service.delete({
        id: Number(id),
        id_user: session.id,
      })
    })
  }

  async create(event: H3Event) {
    console.log("create")

    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body = await readBody(event)
      const data = this.sanitize(body, {
        id_user: session.id,
        id_market: session.id_market,
      })
      return this.service.create(data)
    })
  }

  async update(event: H3Event) {
    return tryCatch(async () => {
      const { session } = await getUserSession(event)
      const body = await readBody(event)
      const { id } = getRouterParams(event)

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
