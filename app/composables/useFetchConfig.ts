import type { UseFetchOptions } from '#app'

export function useFetchConfig() {
  const token = useCookie('_token')

  const baseConfig: UseFetchOptions<any> = {
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  }

  const merge = <T = any>(config?: UseFetchOptions<T>): UseFetchOptions<T> => {
    return Object.assign({}, baseConfig, config)
  }

  return {
    merge
  }
}
