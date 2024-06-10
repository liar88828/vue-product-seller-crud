import { CryptrService } from "../lib/cryptr"

export class Libs {
  cryptr = new CryptrService()
}
export const lib = new Libs()
