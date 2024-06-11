import { describe, expect, test } from "vitest"

describe("test auth api", () => {
  test("prepare test", async () => {
    const data = await $fetch("http://localhost:3000/api/test")
    expect(data).toContain("Hello Nitro for test")
    expect(data).not.toContain("Hello Nitro is false")
  })
})
