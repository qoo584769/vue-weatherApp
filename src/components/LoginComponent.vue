<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">會員登入</h2>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">信箱</label>
        <input
          v-model="email"
          type="text"
          id="email"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">密碼</label>
        <input
          v-model="password"
          type="password"
          id="password"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
        />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white rounded-md py-2">登入</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  const host = import.meta.env.VITE_HOST
  try {
    const response = await axios.post(`${host}/api/login`, {
      email: email.value,
      password: password.value
    })

    // JWT Token
    const { token } = response.data

    // 儲存 Token
    localStorage.setItem('token', token)

    const memberResponse = await axios.get(`${host}/api/member/${email.value}`)

    localStorage.setItem('userName', memberResponse.data.email)

    router.push({ name: 'weather' })
  } catch (error) {
    console.error('登入失敗:', error)
  }
}
</script>
