export const useAuthStore = () => {
  const { loggedIn, user, session, clear, fetch } = useUserSession()

  const signIn = async () => {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: {
        email: "user1@gmail.com",
        password: "user1123",
      },
    })
    await fetch()
  }
  return { signIn, loggedIn, user, session, clear, fetch }
}
