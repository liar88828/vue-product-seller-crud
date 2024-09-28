export class TrolleySanitize {
  sanitize(
    data: TrolleyCreateClient,
    session: SessionUser
  ): TrolleyCreateServer {
    return {
      id: data.id_trolley,
      id_product: data.id_product,
      qty: data.qty,
      id_user: session.id,
      // id_trolly: data.id_trolly,
      // id_product: data.id_product,
      // id_transaction: data.id_transaction,
    }
  }
}

export const trolleySanitize = new TrolleySanitize()
export type ITrolleySanitize = TrolleySanitize
