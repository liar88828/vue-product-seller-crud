import Cryptr from "cryptr"

export class CryptrService {
  public cryptr: Cryptr
  constructor(secretKey: string) {
    this.cryptr = new Cryptr(secretKey)
  }

  encrypted(key: string) {
    return this.cryptr.encrypt(key)
  }
  decrypted(key: string) {
    return this.cryptr.decrypt(key)
  }

  compare(pass: string, passDB: string) {
    console.log({ pass, passDB })
    const decrypted = this.decrypted(passDB)
    const validPass = decrypted === pass
    if (!validPass) {
      throw createError({ statusCode: 401, statusMessage: "Invalid Password" })
    }
    return validPass
  }
}
