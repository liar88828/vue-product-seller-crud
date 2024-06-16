import type { BaseClass } from "~/types/globals/controller"
import type { Order } from "@prisma/client"
import { OrderServices } from "~/server/services/transaction/order"

export class OrderController implements BaseClass {
  constructor(public service: OrderServices) {}
  sanitize(data: Object): Object {
    throw new Error("Method not implemented.")
  }

  async detailOrder(id: number) {
    return db.order.detail(id)
  }
  async createOrder(data: Order) {
    return db.order.create(data)
  }
  async confirmOrder(data: Order) {
    return db.order.create(data)
  }
  async allOrder(id_market: number) {
    return db.order.all(id_market)
  }
  async allOrderDetail(id_market: number) {
    return db.order.allDetail(id_market)
  }
}
