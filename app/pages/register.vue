<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const apiUrl = import.meta.env.VITE_GOOGLE_LOGIN_URL
const useAuth = useAuthStore()
const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()

function handleGoogleLogin() {
  window.location = apiUrl
}

async function onLogin() {
  const rs = await useApi('/proxy/login', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  })
  console.log('rs', rs)

  //   if (rs.status) {
  //     return router.push({ name: 'admin.add-job' })
  //   }
  console.log('rs.data?.status', rs.status)
}
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Sign up</h2>

      <form class="space-y-6">
        <div>
          <input
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 outline-none"
            placeholder="Full Name"
          />
        </div>

        <div>
          <input
            type="email"
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 outline-none"
            placeholder="Email address"
          />
        </div>

        <div>
          <input
            type="password"
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 outline-none"
            placeholder="Password"
          />
        </div>

        <button class="w-full py-3 bg-black text-white rounded-xl font-semibold hover:opacity-90">
          Create Account
        </button>

        <p class="text-center text-sm text-gray-600">
          Already a member?
          <a href="/login" class="text-black font-semibold">Login</a>
        </p>
      </form>
    </div>
  </div>
</template>
