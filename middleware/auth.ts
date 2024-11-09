export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useUserSession()
  // console.log(loggedIn.value)
  
  if (to.path === '/auth/sign-in' && loggedIn.value) {
    return navigateTo("/home")
  }
  
  if (!loggedIn.value) {
    return navigateTo("/auth/sign-in")
  }
})
