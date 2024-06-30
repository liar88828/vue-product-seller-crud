// const config = useRuntimeConfig()

export default oauth.githubEventHandler({
  config: {
    emailRequired: true,
    // clientId: config.oauth.github.clientId,
    // clientSecret: config.oauth.github.clientSecret,
  },
  async onSuccess(event, { user, tokens }) {
    const { password, phone, ...rest } = await control.user(event).id()
    await setUserSession(event, {
      user: rest,
      session: rest,
      // role: 'USER',
      loggedInAt: new Date(),
    })
    return sendRedirect(event, "/")
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error("GitHub OAuth error:", error)
    return sendRedirect(event, "/")
  },
})
