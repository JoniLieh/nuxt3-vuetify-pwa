
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error: any, { event }) => {
    /**
     * Catch API not reachable Error
     */
    if (error.statusCode == 500 && error.cause?.code == "ECONNREFUSED") {
      console.log(`[${error.cause?.code}] Error catched: Address couldn't be reached ${error.cause.address}:${error.cause.port}${event?._path}`);
      error.statusCode = 503;
      error.message = `[${error.cause?.code}] Address couldn't be reached ${error.cause.address}:${error.cause.port}${event?._path}`
    }
  })
})
