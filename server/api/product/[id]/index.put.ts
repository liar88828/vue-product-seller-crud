export default defineEventHandler(async (event) => {
  const { session } =  await getUserSession(event)
  const { id } = getRouterParams(event)
  const body = await readBody(event)
  const data = {
    product: await control.product.market.update(body, id, session.id),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
