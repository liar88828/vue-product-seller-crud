export class HomeServices {
  async index() {
    const trending = await db.product.findTest()
    const newProduct = await db.product.findTest()
    const bestProduct = await db.product.findTest()
    return {
      trending,
      newProduct,
      bestProduct,
    }
  }
}
