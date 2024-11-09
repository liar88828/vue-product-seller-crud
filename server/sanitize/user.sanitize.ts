export class UserSanitize {
  sanitize(data: UserCreate): UserCreate {
    return {
      email: data.email,
      name: data.name,
      address: data.address,
      phone: data.phone,
      password: data.password,
      // id_role: data.id_role,
      // id_market: randomNumber(),
      // id_trolly: randomNumber(),
      // id_like: randomNumber(),
      // id_follow: randomNumber(),
    }
  }
}
export const userSanitize = new UserSanitize()
export type IUserSanitize = UserSanitize
