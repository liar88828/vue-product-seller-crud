export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession()
  const protectedRoutes = ["/profile", "/market", "message"]

  if (!loggedIn.value) {
    if (protectedRoutes.includes(to.path)) {
      return navigateTo("/auth/sign-in")
    }
  }
})
