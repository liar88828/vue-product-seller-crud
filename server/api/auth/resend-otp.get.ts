export default defineEventHandler(async (event) => {
  const data = {
    resend: await authController.resendOTP(event),
    async toJson() {
      return { resend: this.resend }
    },
  }
  return data
})
