/* v8 ignore next 3 */

import { CryptrService } from "../lib/cryptr"

const config = useRuntimeConfig()

class Libs {
  cryptr = new CryptrService(config.cryptrKey || "secret-key")
  // tryCatch = TryCatch
}
export const lib = new Libs()
