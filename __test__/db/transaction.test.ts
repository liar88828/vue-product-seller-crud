import { assert, expect, test } from "vitest"
import { TransactionDB } from "~/server/db/transaction"
import { UserDB } from "~/server/db/user"

const transaction = new TransactionDB()
const user = new UserDB()

export const testTransactionDb = test.extend({
  transaction,
})

testTransactionDb(
  "transactional be tested transaction controller",
  async ({ transaction }) => {
    const test = transaction.test("test")
    expect(test).toBe("test")
  }
)

const testTransaction = {
  drop_address: "semarang test transaction",
  status: "Pending",
  id_user: "test_transaction",
  id: 1,
}

const userFound = await user.findId("test_transaction").then(async (data) => {
  if (data) {
    console.log(data, "user found")
    return false
  } else {
    // await user.create({
    //   name: "user test transaction",
    //   address: "semarang test transaction",
    //   phone: "01234567890",
    //   email: "test_transaction@gmail.com",
    //   password: "test_transaction12345",
    //   // id_role: "USER",
    //   //@ts-ignore
    //   id: "test_transaction",
    // })
  }
})
console.log(userFound, "is create -------")

// const findTransaction = false
const findTransaction = await transaction.id(0).then((data) => {
  console.log(data, "test id transaction")
  // if found dont return true
  if (!data) {
    console.log("data not found")
    return true
  }
  return false
})

// const findAllTransaction= await transaction.testAll().then((data) => {
//   console.log(data, "test id transactionMany")
//   if (data) {
//     return false
//   }
// })
console.log(findTransaction, `this find is ${findTransaction}`)

testTransactionDb.skipIf(!findTransaction)(
  "transaction can be create ",
  async ({ transaction }) => {
    console.log(userFound)
    console.log("will execute ")

    const test = await transaction.create({
      dateExp: new Date(),
      discount: 0,
      id_buyer: testTransaction.id_user,
      id_market: 1,
      promoCode: "FASDFSD5756",
      drop_address: testTransaction.drop_address,
      status: testTransaction.status,
      //@ts-expect-error
      id: testTransaction.id,
    })

    expect(test).toBeDefined()
  }
)
console.log(findTransaction, "find transaction")
testTransactionDb.skipIf(findTransaction)(
  "transaction can be find",
  async ({ transaction }) => {
    const test = await transaction.id(0)
    console.log(test, "is find")
    if (test) {
      expect(test).toBeDefined()
      assert.isObject(test)
      assert.include(test, {
        drop_address: testTransaction.drop_address,
      })
    } else {
      expect(test).toBeUndefined()
    }
  }
)

testTransactionDb.skip(
  "transaction can be update ",
  async ({ transaction }) => {
    const test = await transaction.update(0, {
      dateExp: new Date(),
      discount: 0,
      id_buyer: testTransaction.id_user,
      id_market: 1,
      promoCode: "FASDFSD5756",
      status: "Pending",
      drop_address: testTransaction.drop_address,
      // id_status: "Pending update",
    })

    expect(test).toBeDefined()
    // assert.include(test, {
    //   id_status: "Pending update",
    // })
  }
)

testTransactionDb.skip(
  "transaction can be find after update",
  async ({ transaction }) => {
    const test = await transaction.id(0)
    console.log(test)
    if (test) {
      expect(test).toBeDefined()
      assert.isObject(test)
      // assert.include(test, {
      //   id_status: "Pending update",
      // })
      // assert.include(test, {
      //   id_status: testTransaction.drop_address,
      // })
    } else {
      expect(test).toBeNull()
    }
  }
)

testTransactionDb.skip(
  "transaction can be delete ",
  async ({ transaction }) => {
    const test = await transaction.delete(9)

    console.log(test, " is found")
    expect(test).toBeDefined()

    // assert.include(test, {

    // })
  }
)

testTransactionDb.skip(
  "transaction can be find after Delete",
  async ({ transaction }) => {
    const test = await transaction.id(0)
    console.log(test, " is null")
    expect(test).toBeNull()
  }
)
