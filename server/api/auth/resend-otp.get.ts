export default defineEventHandler(async (event) => {
  const data = {
    resend: await control.auth.resendOTP(event),
    async toJson() {
      return { resend: this.resend }
    },
  }
  return data
})
