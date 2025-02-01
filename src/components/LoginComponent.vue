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
    <router-link to="/">回首頁</router-link>
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
    // ---------
    // axios.interceptors.request.use((config) => {
    //   const token = localStorage.getItem('token')
    //   if (token) {
    //     config.headers['Authorization'] = `Bearer ${token}`
    //   }
    //   return config
    // })
    // ---------
    const userResponse = await axios.get(`${host}/api/user/${email.value}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(userResponse)
    localStorage.setItem('userEmail', userResponse.data.email)
    localStorage.setItem('userName', userResponse.data.username)
    localStorage.setItem(
      'room_id',
      JSON.stringify({
        room_id: userResponse.data.rooms[0].room_id,
        room_name: userResponse.data.rooms[0].room_name
      })
    )
    if (token) {
      router.push({ name: 'weather' })
    }
  } catch (error) {
    console.error('登入失敗:', error)
  }
}
</script>
