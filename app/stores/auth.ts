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
