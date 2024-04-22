import { joinURL } from 'ufo'

/**
 * PROXYING /api
 * https://github.com/manniL/alexander-lichter-proxy-nuxt/blob/main/server/api/%5B...%5D.ts
 * by manniL
 */

export default defineEventHandler(async (event) => {
  // Get the runtimeconfig proxy url
  const proxyUrl = useRuntimeConfig().proxyToUrl || "http://localhost"
  // check the path
  const path = event.path.replace(/^\/api\//, '') // /api/users -> users
  const target = joinURL(proxyUrl, path)
  
  // proxy it!
  return proxyRequest(event, target)
})