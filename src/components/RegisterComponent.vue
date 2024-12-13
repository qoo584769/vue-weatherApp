<!-- src/components/Register.vue -->
<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">會員註冊</h2>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">帳號</label>
        <input
          v-model="username"
          type="text"
          id="username"
          placeholder="帳號"
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
          placeholder="密碼"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">信箱</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="信箱"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
        />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white rounded-md py-2">註冊</button>
    </form>
    <p class="mt-4 text-sm text-gray-700">
      已經有帳號了？ <router-link to="/login">登入</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')
const email = ref('')

const register = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/register', {
      username: username.value,
      email: email.value,
      password: password.value
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
</script>
