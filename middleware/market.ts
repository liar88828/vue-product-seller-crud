export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn, session } = useUserSession()
  // console.log(loggedIn.value)
  if (!loggedIn.value) {
    return navigateTo("/auth/sign-in")
  }

  // console.log(to.path)
  // if (session.value.session.createMarket) {
  //   if (!to.path.includes("/market/profile")) {
  //     return navigateTo("/market/profile")
  //   }
  // } else {
  //   // if (!to.path.includes("/market/profile/create")) {
  //   //   return navigateTo("/market/profile/create")
  //   // }
  // }
})
