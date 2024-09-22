export class SanitizeTrolly {
  sanitize(data: BoxCreate): BoxCreate {
    return {
      price: data.price,
      qty: data.qty,
      id_trolly: data.id_trolly,
      id_product: data.id_product,
      // id_transaction: data.id_transaction,
    }
  }
}
