const ROLE_ADMIN = 1
const ROLE_CANDIDATE = 2
const ROLE_COMPANY = 3

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()

  return {
    provide: {
      isAdmin: authStore.user.role == ROLE_ADMIN,
      isCandidate: authStore.user.role == ROLE_CANDIDATE,
      isCompany: authStore.user.role == ROLE_COMPANY,
      currentUser: authStore.user,
    },
  }
})
