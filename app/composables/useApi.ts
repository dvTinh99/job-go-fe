// composables/useApi.ts
export function useApi<T>(
  request: Parameters<typeof useFetch<T>>[0],
  opts: Parameters<typeof useFetch<T>>[1] = {},
) {
  const token = useCookie('_token')

  return useFetch<T>(request, {
    ...opts,
    headers: {
      ...(opts?.headers || {}),
      Authorization: token.value ? `Bearer ${token.value}` : '',
      Accept: 'application/json',
    },
  })
}

export function useLazyApi<T>(
  request: Parameters<typeof useLazyFetch<T>>[0],
  opts: Parameters<typeof useLazyFetch<T>>[1] = {},
) {
  const token = useCookie('_token')

  return useLazyFetch<T>(request, {
    ...opts,
    headers: {
      ...(opts?.headers || {}),
      Authorization: token.value ? `Bearer ${token.value}` : '',
      Accept: 'application/json',
    },
  })
}
