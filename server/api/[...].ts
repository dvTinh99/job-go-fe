import { proxyRequest } from 'h3'

export default defineEventHandler(async (event) => {
  console.log('event', event.path);
  
  const path = event.path || ''
  const target = `http://localhost:8009${path}`

  console.log('target', target);
  

  return await proxyRequest(event, target, {
    headers: {
      Accept: "application/json"
    }
  })
})
