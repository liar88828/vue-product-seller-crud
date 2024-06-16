import type { IdLike } from "~/types/user/like"

export class UserLikeController {
  async get(id: number) {
    return db.like.get(id)
  }
  async add(id: IdLike) {
    return db.like.add(id)
  }

  async unLike(id: number) {
    return db.like.unLike(id)
  }

  like = {
    unLike: this.unLike,
    add: this.add,
    get: this.get,
  }
}
