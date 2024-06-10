import { cryptrConfig } from "../config/cryptr"

export class CryptrService {
  encrypted(key: string) {
    return cryptrConfig.encrypt(key)
  }
  decrypted(key: string) {
    return cryptrConfig.decrypt(key)
  }

  compare(key: string, hash: string) {
    return this.decrypted(hash) === key
  }
}
