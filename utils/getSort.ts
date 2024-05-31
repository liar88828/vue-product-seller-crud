import type { FilterData } from "~/assets/filter"

export default <T>(data: T[], key: keyof T, value: string) =>
  data.toSorted((a, b) => {
    if (value === "Low" || value === "High") {
      // @ts-ignore
      if (value === "Low") return a[key] - b[key]
      // @ts-ignore
      if (value === "High") return b[key] - a[key]
    }
    return 0
  })
