import Cryptr from "cryptr"

export class CryptrService {
  public cryptr: Cryptr
  constructor(secretKey: string) {
    this.cryptr = new Cryptr(
      secretKey
      //{  saltLength: 32, }
    )
  }

  encrypted(key: string) {
    return this.cryptr.encrypt(key)
  }
  decrypted(key: string) {
    return this.cryptr.decrypt(key)
  }

  compare(key: string, hash: string) {
    return this.decrypted(hash) === key
  }
}
