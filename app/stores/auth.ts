import type { ApiResponse } from "~/entities/Response"

type TAuth = {
  user: object
  access_token: string
  refresh_token: string
  token_type: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
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
      // this.login(rs.data.access_token, rs.data.refresh_token)
      // return rs
    },
    async login(access_token: string, refresh_token: string) {
      // this.user = user
      this.access_token = access_token
      this.refresh_token = refresh_token
      this.isLoggedIn = true

      // có thể config header mặc định
      // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
    },
    async register(name: string, email: string, password: string, password_confirmation: string) {
      // this.user = user
      const error = await useApi<ApiResponse<TAuth>>('/api/register', {
        method: 'POST',
        body: {
          name,
          email,
          password,
          password_confirmation,
        },
      })
      console.log('error register', error);
      
      // this.access_token = data.value.
      // this.refresh_token = refresh_token
      // this.isLoggedIn = true

      // có thể config header mặc định
      // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
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
