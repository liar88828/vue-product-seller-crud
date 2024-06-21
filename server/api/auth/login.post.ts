export default defineEventHandler(async (event) => {
  const user = await control.auth.oldSignIn(await readBody(event))

  await setUserSession(event, {
    user,
    session: user,
    loggedInAt: new Date(),
    // Any extra fields
  })

  return user
})
