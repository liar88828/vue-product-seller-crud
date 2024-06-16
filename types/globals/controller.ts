export interface BaseClass {
  // findAll(): Promise<Object[]>
  // findId(id: number): Promise<Object>
  // create(data: Object): Promise<Object>
  // delete(id: number): Promise<Object>
  // update(id: number, data: Object): Promise<Object>
  sanitize(data: Object): Object
}
