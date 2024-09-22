export class HomeController {
  constructor(protected service: IHomeServices) {}

  async homeIndex(): Promise<HomeApi> {
    return {
      newProduct: await db.product.findTest(),
      bestProduct: await db.product.findTest(),
      trending: await db.product.findTest(),
    }
  }
}

export const homeController = new HomeController(homeService)
