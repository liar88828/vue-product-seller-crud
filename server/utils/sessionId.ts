import type { H3Event } from "h3"
import type { SessionUser } from "~/types/globals/session"

export async function sessionId(event: H3Event): Promise<{
  session: SessionUser
  id: number
}> {
  const { session } = await getUserSession(event)
  const { id } = getRouterParams(event)
  return { id: Number(id), session }
}
