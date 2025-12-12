import type { ApiResponse } from "~/entities/Response"

type TAuth = {
  user: object
  access_token: string
  refresh_token: string
  token_type: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {},
    access_token: '',
    refresh_token: '',
    isLoggedIn: false,
  }),
  getters: {
    getUser: (state) => state.user,
    getAccessToken: (state) => state.access_token,
    isAuthenticated: (state) => state.isLoggedIn,
  },
  actions: {
    async loginWithEmail(email: string, password: string) {
      // const rs = await authApi.loginWithEmail(email, password)
      const { data, error } = await useApi<ApiResponse<TAuth>>('/api/login', {
        method: 'POST',
        body: {
          email,
          password,
        },
      })
      this.user = data.value.data.user
      this.access_token = data.value.data.access_token
      this.refresh_token = data.value.data.refresh_token
      this.isLoggedIn = true

      return data.value.status
    },
    async login(access_token: string, refresh_token: string) {
      this.access_token = access_token
      this.refresh_token = refresh_token
      this.isLoggedIn = true
    },
    async register(name: string, email: string, password: string, password_confirmation: string) {
      // this.user = user
      const { data, error } = await useApi<ApiResponse<TAuth>>('/api/register', {
        method: 'POST',
        body: {
          name,
          email,
          password,
          password_confirmation,
        },
      })
      console.log('error register', error);
      
      this.access_token = data.value.data.access_token
      this.refresh_token = data.value.data.refresh_token
      this.isLoggedIn = true
    },
    async logout() {
      // Optional: gọi API logout
      // await axios.post('/api/logout')

      this.user = null
      this.access_token = ''
      this.refresh_token = ''
      this.isLoggedIn = false

      // delete axios.defaults.headers.common['Authorization']
    },
  },
  persist: ['access_token', 'refresh_token'],
})
