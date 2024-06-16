import { describe, expect, test } from "vitest"

describe.skip("test auth api", () => {
  test("it can be tested", async () => {
    const res = await fetch("http://localhost:3000/api/test")
    console.log(res.body)
    expect(res.body).toBe('"Hello Nitro for test"')
  })
})
