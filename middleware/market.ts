export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()
  console.log(loggedIn.value)
  if (!loggedIn.value) {
    return navigateTo("/auth/sign-in")
  }
})
