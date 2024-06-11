import { describe, expect, test } from "vitest"

describe("test auth api", () => {
  test("it can be tested", async () => {
    const res = await fetch("http://localhost:3000/api/home")

    expect(1).toBe(1)
  })
})
