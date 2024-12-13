<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">會員登入</h2>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">使用者名稱</label>
        <input
          v-model="username"
          type="text"
          id="username"
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

const username = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/login', {
      username: username.value,
      password: password.value
    })

    // JWT Token
    const { token } = response.data

    // 儲存 Token
    localStorage.setItem('token', token)

    const memberResponse = await axios.get(`http://127.0.0.1:5000/api/member/${username.value}`)

    localStorage.setItem('userName', memberResponse.data.username)

    router.push({ name: 'home' })
  } catch (error) {
    console.error('登入失敗:', error)
  }
}
</script>
