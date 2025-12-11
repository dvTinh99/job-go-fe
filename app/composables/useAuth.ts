import type { User } from '~/entities/User'

export function useAuth() {
  const user = ref<User>()
  const auth = computed(() => user.value?.role === 'master')
  return { user, auth }
}
