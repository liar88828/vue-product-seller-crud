export default defineEventHandler(async (event) => {
  const data = {
    valid: await control.auth.validOTP(event),
    async toJson() {
      return { valid: this.valid }
    },
  }
  return data
})
