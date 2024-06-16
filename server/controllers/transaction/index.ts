import { OrderServices } from "~/server/services/transaction/order"
import { TransactionServices } from "../../services/transaction"
import { OrderController } from "./order"

export class TransactionController extends OrderController {
  constructor(
    public service: TransactionServices,
    public orderService: OrderServices
  ) {
    super(orderService)
  }
  async detail(id: string, id_user: string) {
    return this.service.detail({ id_user, id: Number(id) })
  }
  async delete(id: string, id_user: string) {
    return this.service.delete({ id_user, id: Number(id) })
  }
  async all(id_user: string) {
    return this.service.all(id_user)
  }
  async id(id: number) {
    return this.service.id(id)
  }

  async pay(id: string, id_user: string) {
    return this.service.pay({ id_user, id: Number(id) })
  }

  history = {
    detail: this.detail,
    delete: this.delete,
    all: this.all,
    id: this.id,
  }

  order = {
    confirm: super.confirmOrder,
    create: super.createOrder,
    detail: super.detailOrder,
    all: super.allOrder,
    allDetail: super.allOrderDetail,
  }
}
