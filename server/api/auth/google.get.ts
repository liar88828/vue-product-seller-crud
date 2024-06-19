export default oauth.googleEventHandler({
  async onSuccess(event, { user, tokens }) {
    console.log(user)
    await setUserSession(event, { user })

    return sendRedirect(event, "/")
  },
  onError(event, error) {
    console.log("Erro Google Auth", error)
    return sendRedirect(event, "/")
  },
})
