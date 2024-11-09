// class BoxTrollySanitize {
//   sanitize(data: Box, id_transaction: number): Box {
//     return {
//       id: data.id,
//       id_product: data.id_product,
//       id_transaction,
//       id_trolly: data.id_trolly,
//       price: data.price,
//       qty: data.qty,
//     }
//   }
//   sanitizeLoop({ box, id_transaction }: CreateBox) {
//     return box.map((item) => {
//       return this.sanitize(item, id_transaction)
//     })
//   }
// }
