export default oauth.googleEventHandler({
  async onSuccess(event, { user, tokens }) {
    console.log(user)
    const { password, phone, ...rest } = await control.user.id(user.id)
    await setUserSession(event, {
      user,
      session: rest,
      loggedInAt: new Date(),
    })
    return sendRedirect(event, "/")
  },
  onError(event, error) {
    console.log("Error Google Auth", error)
    return sendRedirect(event, "/")
  },
})
