export class HistoryController {
  async all(id_user: string) {
	return db.trans.user.all(id_user)
  }

}