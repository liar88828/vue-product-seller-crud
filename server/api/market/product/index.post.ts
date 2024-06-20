export default defineEventHandler(async (event) => {
  // const { session } =  await getUserSession(event)

  // const data = {
  //   product: await control.product.create(await readBody(event), {
  //     id_user: session.id,
  //   }),
  //   toJSON() {
  //     return {
  //       product: this.product,
  //     }
  //   },
  // }
  // return data
  return "development"
})
