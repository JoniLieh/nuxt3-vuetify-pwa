/**
 * Check if User isnt registered
 * Runs every page except user-login, user-registration
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (to.name != 'user-login' && to.name != 'user-registration' && !userStore.userIsRegistered) { 
    return navigateTo('/login')
  }
})
