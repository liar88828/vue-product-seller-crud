import type { H3Event } from "h3"
import type { SessionUser } from "~/types/globals/session"

export class SessionIdClass {
  constructor(protected event: H3Event) {}

  async sessionId(): Promise<{
    session: SessionUser
    id: number
  }> {
    const { session } = await getUserSession(this.event)
    const { id } = getRouterParams(this.event)
    return { id: Number(id), session }
  }
}
