export class UserSanitize {
  sanitize(data: UserCreate): UserCreate {
    return {
      email: data.email,
      name: data.name,
      address: data.address,
      phone: data.phone,
      id_role: data.id_role,
      password: data.password,
      id_market: randomNumber(),
      id_trolly: randomNumber(),
      id_like: randomNumber(),
      id_follow: randomNumber(),
    }
  }
}
