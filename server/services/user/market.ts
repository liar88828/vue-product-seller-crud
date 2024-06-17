import type { Market } from "@prisma/client"
import type { RequiredProperty } from "~/types/globals/generic"
import type { TStatus } from "~/types/globals/Status"
import type {
  MarketServer,
  MarketServerFull,
  MarketStatic,
} from "~/types/market/ProfileCompany"
import type { IdMarketTrans } from "~/types/product/findId"

class MarketSanitize {
  marketCreate(
    data: MarketServer,
    id_user: string
  ): RequiredProperty<MarketServer> {
    id_user = zods.idString.parse(id_user)
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

export class MarketStaticService extends MarketSanitize {
  // async statics(id_product: number, market: Market): Promise<MarketStatic> {
  //   const productCount = await db.product.counts(id_product)
  //   // const market = await db.product.findCompany(id_product)
  //   const follow = await db.follow.findMarket(market.id_follow as number)
  //   return {
  //     product: productCount,
  //     follow: follow,
  //     since: market?.since || new Date(),
  //     response: "100%",
  //   }
  // }
}

class MarketOwner extends MarketStaticService {
  protected async confirm(id: IdMarketTrans, status: TStatus) {
    return db.trans.market.confirm.add(id, status)
  }
}
class MarketUser extends MarketOwner {}
export class MarketServices extends MarketUser {
  async create(data: MarketServer) {
    data = zods.companyCreate.parse(data)
    return db.market.create(data)
  }

  async findId(id: number) {
    id = zods.idNumber.parse(id)
    return db.market.findId(id)
  }

  async findFull(id_market: number): Promise<MarketServerFull> {
    id_market = zods.idNumber.parse(id_market)
    return db.market.findFull(id_market)
  }

  async updateProfile(
    id_market: number,
    data: MarketServer
  ): Promise<MarketServerFull> {
    id_market = zods.idNumber.parse(id_market)
    data = this.updateMarketProfile(data)
    return db.market.updateProfile(id_market, data)
  }
  owner = {
    confirm: super.confirm,
  }
}
