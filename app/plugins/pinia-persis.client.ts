import { defineNuxtPlugin } from '#app'
import type { SubscriptionCallbackMutation, StateTree, Pinia } from 'pinia'


export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia as Pinia

  pinia.use(({ options, store }) => {
    const storeId = store.$id
    const key = `pinia_${storeId}`

    // Lấy danh sách fields cần persist (nếu có)
    const persistFields: string[] | undefined = options?.persist || [] 

    // Load dữ liệu từ localStorage
    const saved = localStorage.getItem(key)
    if (saved) {
      const data = JSON.parse(saved)

      if (persistFields) {
        // Chỉ patch các field cần persist
        const patchedData = Object.fromEntries(
          Object.entries(data).filter(([field]) => persistFields.includes(field))
        )
        store.$patch(patchedData)
      } else {
        store.$patch(data)
      }
    }

    // Subscribe để lưu lại state khi thay đổi
    store.$subscribe(
      (_mutation: SubscriptionCallbackMutation<StateTree>, state: StateTree) => {
        const dataToSave = persistFields
          ? persistFields.reduce((obj, field) => {
              obj[field] = state[field]
              return obj
            }, {} as any)
          : state

        localStorage.setItem(key, JSON.stringify(dataToSave))
      },
      { detached: true } // tránh double save khi HMR
    )
  })
})

