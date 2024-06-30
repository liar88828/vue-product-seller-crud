import type { H3Event } from "h3"

export interface ClassBase {
  readonly event: H3Event
  id(event: H3Event): Promise<any>
  all(event: H3Event): Promise<any[]>
  delete(event: H3Event): Promise<any>
  create(event: H3Event): Promise<any>
  update(event: H3Event): Promise<any>
  detail(event: H3Event): Promise<any>
}
