export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const product = await db.product.detailFull(Number(id))

  return { product }
})
