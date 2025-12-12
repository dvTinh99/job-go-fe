<script setup lang="ts">
import { ref } from 'vue'

const email = ref<string>('')
const password = ref<string>('')
const fullname = ref<string>('')
const confirmPassword = ref<string>('')
const authStore = useAuthStore()

async function onSignUp() {
  const rs = authStore.register(fullname.value, email.value, password.value, confirmPassword.value)
  // const rs = await useApi('/api/register', {
  //   method: 'POST',
  //   body: {
  //     name: fullname,
  //     email: email.value,
  //     password: password.value,
  //     password_confirmation: confirmPassword.value,
  //   },
  // })
  console.log('rs', rs)

  //   if (rs.status) {
  //     return router.push({ name: 'admin.add-job' })
  //   }
  // console.log('rs.data?.status', rs.status)
}
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Sign up</h2>

      <form class="space-y-6">
        <div>
          <input
            v-model="fullname"
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 outline-none"
            placeholder="Full Name"
          />
        </div>

        <div>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 outline-none"
            placeholder="Email address"
          />
        </div>

        <div>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 outline-none"
            placeholder="Password"
          />
        </div>

        <div>
          <input
            v-model="confirmPassword"
            type="password"
            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-800 outline-none"
            placeholder="Confirm SPassword"
          />
        </div>

        <button class="w-full py-3 bg-black text-white rounded-xl font-semibold hover:opacity-90" @click="onSignUp" type="button">
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
