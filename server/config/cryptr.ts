/* v8 ignore next 3 */

import Cryptr from "cryptr"
const config = useRuntimeConfig()
export const cryptrConfig = new Cryptr(config.cryptrKey)
