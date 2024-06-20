import type { RequiredProperty } from "~/types/globals/generic"
import type { MarketServer } from "~/types/market/ProfileCompany"

export class MarketSanitize {
  marketCreate(
    data: MarketServer,
    id_user: string
  ): RequiredProperty<MarketServer> {
    // id_user = zods.idString.parse(id_user)
    return {
      address: data.address,
      name: data.name,
      description: data.description,
      history: data.history,
      industry: data.industry,
      mission: data.mission,
      since: new Date(data.since),
      vision: data.vision,
      // id_user: id_user,
    }
  }
  updateMarketProfile(data: MarketServer): MarketServer {
    return {
      address: data.address,
      name: data.name,
      description: data.description,
      history: data.history,
      industry: data.industry,
      mission: data.mission,
      since: new Date(data.since),
      vision: data.vision,
      // id_user: data.id_user,
    }
  }
}
