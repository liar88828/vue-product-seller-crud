import type { Market } from "@prisma/client"
import type { RequiredProperty } from "~/types/globals/generic"
import type { MarketServer } from "~/types/market/ProfileCompany"

export class MarketSanitize {
  sanitize(
    data: RequiredProperty<MarketServer>
  ): RequiredProperty<MarketServer> {
    return MarketSanitize.sanitizeStatic(data)
  }

  static sanitizeStatic(
    data: RequiredProperty<MarketServer>
  ): RequiredProperty<MarketServer> {
    return {
      address: data.address,
      name: data.name,
      description: data.description,
      history: data.history,
      industry: data.industry,
      mission: data.mission,
      since: new Date(data.since),
      vision: data.vision,
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

  sanitizeProfile(data: Market): RequiredProperty<Market> {
    return MarketSanitize.sanitizeProfileStatic(data)
  }

  static sanitizeProfileStatic(data: Market): RequiredProperty<Market> {
    return {
      address: data.address ?? "",
      description: data.description ?? "",
      history: data.history ?? "",
      id_contact: data.id_contact ?? 0,
      id_socialMedia: data.id_socialMedia ?? 0,
      industry: data.industry ?? "",
      mission: data.mission ?? "",
      name: data.name ?? "",
      since: data.since,
      vision: data.vision ?? "",
      id: data.id ?? "",
      id_follow: data.id_follow ?? 0,
    }
  }

  sanitizeContact(data: UpdateContact) {
    return zods.market.contact.parse({
      email: data.email,
      phone: data.phone,
      website: data.website,
    })
  }

  sanitizeMarket(data: UpdateMarket) {
    return zods.market.market.parse({
      address: data.address,
      industry: data.industry,
      mission: data.mission,
      vision: data.vision,
      description: data.description,
      history: data.history,
      name: data.name,
      since: new Date(data.since),
    })
  }

  sanitizeSocial(data: UpdateSocial) {
    return zods.market.social.parse({
      facebook: data.facebook,
      instagram: data.instagram,
      whatsapp: data.whatsapp,
      twitter: data.twitter,
    })
  }
}
