import { ProductServices } from "../../services/product"

export class ProductUserController {
  constructor(public service: ProductServices) {}

  protected async comment() {}
  protected async rating() {}
}
