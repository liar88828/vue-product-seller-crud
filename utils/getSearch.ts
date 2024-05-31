import type { FilterData } from "~/assets/filter"

export default <T>(data: T[], key: keyof T, value: string) =>
  data.filter((d) => {
    return (d[key] as string).toLowerCase().includes(value.toLowerCase())
  })
