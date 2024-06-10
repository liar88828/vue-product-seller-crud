import Cryptr from "cryptr"
const config = useRuntimeConfig()
export const cryptrConfig = new Cryptr(config.cryptrKey)
