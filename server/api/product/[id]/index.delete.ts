export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { session } =  await getUserSession(event)
  // noinspection UnnecessaryLocalVariableJS
  const data = {
    product: await control.product.market.delete({
      id: Number(id),
      id_user: session.id,
    }),

    toJSON() {
      return {
        product: this.product,
      }
    },
  }
  return data
})
