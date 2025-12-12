import { proxyRequest } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const path = event.path || ''
  const target = `${config.public.apiBase}${path}`
  return await proxyRequest(event, target, {
    headers: {
      Accept: "application/json"
    }
  })
})
