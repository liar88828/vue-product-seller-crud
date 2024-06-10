export default defineEventHandler(async (event) => {
  const product = await db.product.findTest()
  return { product }
})
