export default defineEventHandler(async (event) => {
  const data = {
    valid: await authController.validOTP(event),
    async toJson() {
      return { valid: this.valid }
    },
  }
  return data
})
