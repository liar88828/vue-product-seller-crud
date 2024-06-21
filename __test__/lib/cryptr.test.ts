// import { beforeEach, describe, expect, test } from "vitest"
// import { CryptrService } from "~/server/services/cryptr"

// describe("test Service Cryptr", () => {
//   beforeEach(async (context) => {
//     const secretKey = "secret-key-123"
//     //@ts-expect-error
//     context.cryptr = new CryptrService(secretKey)
//   })

//   //@ts-expect-error
//   test("it can be tested CryptrService", ({ cryptr }) => {
//     const text = "hello world"

//     const encrypted = cryptr.encrypted(text)
//     const decrypted = cryptr.decrypted(encrypted)
//     const compare = cryptr.compare(text, encrypted)

//     expect(encrypted).toBeTypeOf("string")

//     expect(decrypted).toBeTypeOf("string")

//     expect(decrypted).toContain(text)
//     expect(decrypted).not.toContain("false")

//     expect(compare).toBeTruthy()
//     expect(compare).toBeTypeOf("boolean")

//     expect(cryptr.compare("false", encrypted)).toBeFalsy()
//     expect(compare).not.toBeTypeOf("string")

//     // expect(decrypted).toContain("string")
//     // expect(compare).toBe(true)
//   })
// })
