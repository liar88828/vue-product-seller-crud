export class TrolleySanitize {
  sanitize(data: TrolleyCreate, session: SessionUser): TrolleyCreate {
    return {
      qty: data.qty,
      id_product: data.id_product,
      id_user: session.id,
      id: 1,
      // id_trolly: data.id_trolly,
      // id_product: data.id_product,
      // id_transaction: data.id_transaction,
    }
  }
}

export const trolleySanitize = new TrolleySanitize()
export type ITrolleySanitize = TrolleySanitize
