import type { H3Event } from "h3"

class Control {
  protected service = new Services()
  auth = new AuthController(this.service.auth)
  home = new HomeController(this.service.home)
  user = (event: H3Event) =>
    new UserController(event, this.service.user, this.service.trans)
  market = (event: H3Event) => new MarketController(event, this.service.market)
}

export const control = new Control()
