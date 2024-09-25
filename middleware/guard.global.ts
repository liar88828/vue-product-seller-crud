export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession()
  // console.log("global auth---")
  const protectedRoutes = ["profile", "market", "message", "user"]

  // console.log(protectedRoutes.includes(to.path), " this path")
  if (!loggedIn.value) {
    console.log("not login redirect --- ", to.path.split("/")[1])
    if (protectedRoutes.includes(to.path.split("/")[1])) {
      return navigateTo("/auth/sign-in")
    }
  }
})
