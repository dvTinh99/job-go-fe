export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(({ store }) => {
    if (!store.$state || !store.persist) return

    const key = `pinia-${store.$id}`

    // Load
    const saved = localStorage.getItem(key)
    if (saved) {
      const data = JSON.parse(saved)
      store.$patch(data)
    }

    // Save
    store.$subscribe((_mutation, state) => {
      const filtered = {}

      for (const field of store.persist) {
        filtered[field] = state[field]
      }

      localStorage.setItem(key, JSON.stringify(filtered))
    })
  })
})
