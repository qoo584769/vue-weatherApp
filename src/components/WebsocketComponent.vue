<template>
  <div class="w-dvw md:w-4/5 text-black">
    <input type="checkbox" id="menu" />
    <label
      for="menu"
      class="line w-10 h-10 cursor-pointer block p-0 fixed bottom-5 z-30 transition-all duration-700"
    >
      <div class="menu transition-all duration-700"></div>
    </label>
    <div
      class="menu-list w-0 h-0 fixed left-0 bottom-0 m-auto flex z-20 overflow-hidden transition-all duration-700 md:p-5"
    >
      <div
        class="flex flex-col flex-grow md:flex-row text-white rounded-xl overflow-hidden"
        v-if="user"
      >
        <!-- 左側功能按鈕 -->
        <div
          class="w-full flex flex-row md:flex-col py-1 bg-[#1f1f1f] shadow absolute bottom-0 left-0 md:relative md:w-20"
        >
          <ul
            class="flex flex-row w-full justify-around md:space-y-4 md:justify-start md:w-auto md:flex-col text-[#777777] relative overflow-auto"
          >
            <li
              @click="[(showChatList = false), (showMessageList = false)]"
              :class="{ 'text-white': !showChatList }"
              class="flex flex-col items-center justify-center g-gray-200 cursor-pointer"
            >
              <span class="material-symbols-outlined text-4xl">person</span>
              <span class="text-xs">好友</span>
            </li>
            <li
              @click="
                [
                  (showChatList = true),
                  (showMessageList = false),
                  (currentRoom = {}),
                  (currentMessages = []),
                  (wsPath = '')
                ]
              "
              :class="{ 'text-white': showChatList }"
              class="flex flex-col items-center justify-center g-gray-200 cursor-pointer"
            >
              <span class="material-symbols-outlined text-4xl">chat</span>
              <span class="text-xs">聊天</span>
            </li>
            <li
              class="flex flex-col items-center justify-center g-gray-200 rounded-full cursor-pointer"
              @click="toggleNewFriendModal"
            >
              <span class="material-symbols-outlined text-4xl"> person_add </span>
              <span class="text-xs">加入好友</span>
            </li>
            <li
              class="flex flex-col items-center justify-center g-gray-200 rounded-full cursor-pointer"
              @click="toggleNewRoomModal"
            >
              <span class="material-symbols-outlined text-4xl">chat_add_on</span>
              <span class="text-xs">建立群組</span>
            </li>
            <li
              class="flex flex-col items-center justify-center g-gray-200 rounded-full cursor-pointer"
              @click="handleLogout"
            >
              <span class="material-symbols-outlined text-4xl"> logout </span>
              <span class="text-xs"> 登出 </span>
            </li>
            <li
              class="flex flex-col items-center justify-center g-gray-200 rounded-full cursor-pointer"
            >
              <label
                for="menu"
                class="line w-10 h-10 cursor-pointer block p-0 ixed relative ottom-5 transition-all duration-700"
              >
                <div class="menu transition-all duration-700"></div>
              </label>
              <label for="menu" class="cursor-pointer text-xs">關閉</label>
            </li>
          </ul>
        </div>

        <!-- 中間聊天列表 -->
        <div class="w-full md:w-1/3 bg-[#2d2e30] shadow border-r-2 border-r-[#3e3e3e]">
          <div
            class="border-b border-[#3e3e3e]"
            :class="{
              block: showChatList && !showMessageList,
              'hidden md:block': showChatList && showMessageList
            }"
            v-if="showChatList"
          >
            <ul class="mx-4 mt-2 flex text-[#777777]">
              <li
                class="text-sm mr-2 -mb-[1px] py-1 cursor-pointer"
                :class="{ 'border-b border-white text-white': currentView === item.viewValue }"
                @click="currentView = item.viewValue"
                v-for="(item, index) in viewList"
                :key="index"
              >
                {{ item.viewName }}
              </li>
            </ul>
          </div>
          <div class="border-b border-[#3e3e3e]" v-if="!showChatList">
            <ul class="mx-4 mt-2 flex text-[#777777]">
              <li
                class="text-sm mr-2 border-b border-white text-white -mb-[1px] py-1 cursor-pointer"
              >
                好友
              </li>
            </ul>
          </div>
          <!-- 聊天列表 -->
          <div
            class="h-dvh overflow-y-auto"
            :class="{
              block: showChatList && !showMessageList,
              'hidden md:block': showChatList && showMessageList
            }"
            v-if="showChatList"
          >
            <ul>
              <li
                v-for="chat in filterRooms"
                :key="chat.room_id"
                class="py-2 px-4 rounded cursor-pointer"
                :class="{ 'bg-[#353638]': chat.room_id === currentRoom.room_id }"
                @click="selectRoom(chat)"
              >
                {{ chat.room_name }}
              </li>
            </ul>
          </div>
          <!-- 好友列表 -->
          <div class="h-dvh overflow-y-auto" v-if="!showChatList">
            <ul>
              <li
                v-for="friend in friendLists"
                :key="friend.friend_id"
                :class="{ 'bg-[#353638]': friend.friend_id === currentRoom.room_id }"
                class="flex justify-between px-4 py-2 rounded cursor-pointer"
              >
                <span class="flex-grow" @click="selectFriendRoom(friend)">
                  {{ friend.friend_name }}
                </span>
                <span class="bg-[#FF334B] material-symbols-outlined" @click="removeFriend(friend)">
                  close
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 右側聊天區域 -->
        <div class="flex flex-col bg-[#2d2e30] h-full md:flex md:flex-1">
          <div
            class="px-4 flex items-center justify-between"
            :class="{ 'border-b border-[#3e3e3e]': wsPath }"
          >
            <span class="py-2">
              {{ currentRoom?.room_name }}
            </span>
            <button
              class=""
              v-if="currentRoom?.room_type === 'group'"
              @click="toggleInviteFriendModal"
            >
              <span
                class="icon-fill material-symbols-outlined align-middle text-3xl text-[#4CC764]"
              >
                group_add
              </span>
            </button>
          </div>
          <div class="flex-1 p-4 overflow-y-auto" ref="messageContainer">
            <div v-for="(messages, date) in groupMessage" :key="date" class="">
              <ul>
                <li class="text-center my-2">
                  <span class="bg-[#3f3f3f] text-[#ffffff80] text-sm px-2 py-1 rounded-lg">
                    {{
                      new Intl.DateTimeFormat('zh-TW', {
                        timeZone: 'Asia/Taipei',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      }).format(new Date()) !== date
                        ? `${date}`
                        : '今天'
                    }}
                  </span>
                </li>
                <li v-for="(message, index) in messages" :key="index">
                  <div
                    class="text-sm mb-1"
                    :class="{ 'text-right': message.author === user.storedName }"
                  >
                    {{ message.author }}
                  </div>
                  <div
                    class="mb-2 flex items-end"
                    :class="{ 'justify-end': message.author === user.storedName }"
                  >
                    <div
                      class="text-xs mr-2"
                      :class="{ 'order-1 ml-2 mr-0': message.author !== user.storedName }"
                    >
                      {{ message.time }}
                    </div>
                    <div class="inline-block px-4 py-2 bg-[#555555] rounded shadow">
                      <p>{{ message.content }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="p-4 shadow bg-[#2D2D2D] flex mb-16 md:mb-0" v-if="wsPath">
            <input
              v-model="newMessage"
              @keyup.enter="sendMessage"
              type="text"
              placeholder="輸入訊息"
              class="outline-none flex-grow px-3 py-2 rounded bg-[#3f3f3f]"
            />
            <button @click="sendMessage" class="ml-2 p-2 bg-[#4CC764] rounded">送出</button>
          </div>
        </div>
      </div>

      <ul v-else class="bg-[#1f1f1f] text-white z-20">
        <li class="px-10 py-4 hover:bg-[#777777]"><router-link to="/logon">註冊</router-link></li>
        <li class="px-10 py-4 hover:bg-[#777777]"><router-link to="/login">登入</router-link></li>
        <li class="px-10 py-4 hover:bg-[#777777]">
          <label for="menu" class="cursor-pointer">關閉</label>
        </li>
      </ul>

      <!-- 加入好友模態框 -->
      <div
        v-if="showNewFriendModal"
        class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-4 rounded">
          <h2 class="text-lg font-bold mb-2">加入好友</h2>
          <input
            v-model="newFriend"
            placeholder="好友信箱"
            class="w-full p-2 border border-gray-300 rounded mb-2 text-black"
          />
          <button @click="addFriend" class="w-full p-2 bg-blue-500 text-white rounded">加入</button>
          <button
            @click="toggleNewFriendModal"
            class="w-full mt-2 p-2 bg-red-500 text-white rounded"
          >
            取消
          </button>
        </div>
      </div>
      <!-- 建立群組模態框 -->
      <div
        v-if="showNewRoomModal"
        class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-4 rounded">
          <h2 class="text-lg font-bold mb-2">建立新群組</h2>
          <input
            v-model="newRoom"
            placeholder="新聊天室名稱"
            class="w-full p-2 border border-gray-300 rounded mb-2 text-black"
          />
          <button @click="createRoom" class="w-full p-2 bg-green-500 text-white rounded">
            建立
          </button>
          <button @click="toggleNewRoomModal" class="w-full mt-2 p-2 bg-red-500 text-white rounded">
            取消
          </button>
        </div>
      </div>
      <!-- 邀請好友模態框 -->
      <div
        v-if="showInviteFriendModal"
        class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-4 rounded">
          <h2 class="text-lg font-bold mb-2">邀請好友加入群組</h2>
          <ul class="">
            <li class="" v-for="friend in friendLists" :key="friend.friend_id">
              <span class="black cursor-pointer" @click="inviteFriend = friend">
                {{ friend.friend_name }}
              </span>
            </li>
          </ul>
          <button @click="inviteFriendToRoom" class="w-full p-2 bg-blue-500 text-white rounded">
            邀請
          </button>
          <button
            @click="toggleInviteFriendModal"
            class="w-full mt-2 p-2 bg-red-500 text-white rounded"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showChatList = ref(true)
const showMessageList = ref(false)

const messageContainer = ref(null)
const roomMembers = ref('')
const user = ref(null)
const newMessage = ref('')
const currentView = ref('all')
const viewList = ref([
  { viewName: '全部', viewValue: 'all' },
  { viewName: '好友', viewValue: 'friend' },
  { viewName: '群組', viewValue: 'group' }
])
const chatLists = ref([])
const friendLists = ref([])

const newRoom = ref('')
const newFriend = ref('')
const inviteFriend = ref('')

const currentRoom = ref(null)
const currentMessages = ref([])

const showNewRoomModal = ref(false)
const showNewFriendModal = ref(false)
const showInviteFriendModal = ref(false)

const wsPath = ref('')
let socket

const initializeWebSocket = () => {
  const wsHost = import.meta.env.VITE_WS_HOST
  // 建立 WebSocket 連線
  socket = new WebSocket(`${wsHost}/${wsPath.value}`)

  // 處理接收到的訊息
  socket.addEventListener('message', async (event) => {
    const data = JSON.parse(event.data)

    switch (data.type) {
      case 'history':
        currentMessages.value = data.messages
        roomMembers.value = data.members
        await nextTick()
        if (messageContainer.value) {
          messageContainer.value.scrollTop = messageContainer.value.scrollHeight
        }
        break
      case 'message':
        currentMessages.value.push(data)
        await nextTick()
        if (messageContainer.value) {
          messageContainer.value.scrollTop = messageContainer.value.scrollHeight
        }
        break
      case 'invited_to_room':
        socket.send(JSON.stringify({ type: 'get_lists', user_email: user.value.storedEmail }))
        break
      case 'friend_added':
        friendLists.value.push({
          friend_id: data.friend_id,
          friend_email: data.friend_email,
          friend_name: data.friend_name,
          friend_room_id: data.friend_room_id
        })
        chatLists.value.push({ room_id: data.friend_room_id, room_name: data.friend_name })
        break
      case 'friend_removed':
        friendLists.value = friendLists.value.filter((item) => {
          return item.friend_id !== data.friend_id
        })
        chatLists.value = chatLists.value.filter((item) => {
          return item.room_id !== data.friend_room_id
        })
        currentMessages.value = null
        break
      case 'list_update':
        chatLists.value = data.chatLists
        friendLists.value = data.friendLists
        socket.send(JSON.stringify({ type: 'get_history', user_email: user.value.storedEmail }))
        break
      case 'room_created': {
        const room = {
          room_id: data.room_id,
          room_name: data.room_name,
          room_type: data.room_type
        }
        selectRoom(room)
        break
      }
      default:
        break
    }
  })

  socket.addEventListener('open', async () => {
    await nextTick()
    socket.send(JSON.stringify({ type: 'get_lists', user_email: user.value.storedEmail }))
    console.log(`${user.value.storedEmail} WS連線成功`)
  })

  // 處理連線關閉
  socket.addEventListener('close', () => {
    console.log('WS連線已關閉')
    initializeWebSocket()
  })
}

const createRoom = () => {
  if (newRoom.value.trim() !== '') {
    const room = {
      type: 'create_room',
      room_name: newRoom.value,
      creator_id: user.value.storedEmail
    }
    socket.send(JSON.stringify(room))
    newRoom.value = ''
    showNewRoomModal.value = false
  }
}

const addFriend = () => {
  if (newFriend.value.trim() !== '' && currentRoom.value.room_id) {
    const friendEmail = newFriend.value
    socket.send(
      JSON.stringify({
        type: 'add_friend',
        user_email: user.value.storedEmail,
        friend_email: friendEmail
      })
    )
    newFriend.value = ''
    showNewFriendModal.value = false
  }
}

const removeFriend = (friend) => {
  socket.send(
    JSON.stringify({
      type: 'remove_friend',
      user_email: user.value.storedEmail,
      friend_id: friend.friend_id,
      friend_room_id: friend.friend_room_id
    })
  )
}

const inviteFriendToRoom = () => {
  if (inviteFriend.value !== '' && currentRoom.value) {
    socket.send(
      JSON.stringify({
        type: 'invite_to_room',
        room_id: currentRoom.value.room_id,
        room_name: currentRoom.value.room_name,
        friend_id: inviteFriend.value.friend_id,
        friend_name: inviteFriend.value.friend_name,
        friend_email: inviteFriend.value.friend_email,
        user_name: user.value.storedName
      })
    )
    inviteFriend.value = ''
    showInviteFriendModal.value = false
  }
}

const selectRoom = (room) => {
  if (room.room_id === currentRoom.value.room_id) {
    return
  }
  showMessageList.value = true
  if (socket) {
    currentMessages.value = []
    socket.close()
  }
  wsPath.value = room.room_id
  currentRoom.value = {
    room_id: room.room_id,
    room_name: room.room_name,
    room_type: room.room_type
  }
  initializeWebSocket()
}

const selectFriendRoom = (room) => {
  if (room.friend_room_id === currentRoom.value.room_id) {
    showChatList.value = true
    showChatList.value = true
    return
  }
  if (socket) {
    socket.close()
  }
  currentMessages.value = []
  showMessageList.value = true
  wsPath.value = room.friend_room_id
  currentRoom.value = {
    room_id: room.friend_room_id,
    room_name: room.friend_name,
    room_type: 'friend'
  }
  showChatList.value = true
  initializeWebSocket()
}

const sendMessage = async () => {
  if (newMessage.value.trim()) {
    socket.send(
      JSON.stringify({
        type: 'message',
        author: user.value.storedName,
        content: newMessage.value.trim()
      })
    )
    newMessage.value = ''
  }
}

const handleLogout = async () => {
  localStorage.removeItem('token')
  user.value = {}
  router.push({ name: 'login' })
}

const toggleNewRoomModal = () => {
  showNewRoomModal.value = !showNewRoomModal.value
}

const toggleNewFriendModal = () => {
  showNewFriendModal.value = !showNewFriendModal.value
}

const toggleInviteFriendModal = () => {
  showInviteFriendModal.value = !showInviteFriendModal.value
}

const filterRooms = computed(() => {
  if (currentView.value === 'all') {
    return chatLists.value
  }
  return chatLists.value.filter((item) => {
    return item.room_type === currentView.value
  })
})

const groupMessage = computed(() => {
  if (!currentMessages.value) {
    return []
  }
  return currentMessages.value.reduce((groups, item) => {
    // const [date, time] = item.time.split(' ')
    const date = new Intl.DateTimeFormat('zh-TW', {
      timeZone: 'Asia/Taipei',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date(item.time))
    const time = new Intl.DateTimeFormat('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h24'
    }).format(new Date(item.time))
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push({ time, author: item.author, content: item.content })
    return groups
  }, {})
})

onMounted(() => {
  const storedToken = localStorage.getItem('token')
  const storedEmail = localStorage.getItem('userEmail')
  const storedName = localStorage.getItem('userName')
  const storedRoom = JSON.parse(localStorage.getItem('room_id'))
  if (storedToken) {
    user.value = { storedToken, storedName, storedEmail }
    wsPath.value = storedRoom.room_id
    currentRoom.value = {
      room_id: storedRoom.room_id,
      room_name: storedRoom.room_name,
      room_type: 'group'
    }
    initializeWebSocket()
  }
})

onUnmounted(() => {
  if (socket) {
    socket.close()
  }
})
</script>

<style lang="scss" scoped>
/*
選單線
*/
.line .menu::before,
.line .menu::after {
  background: #ffffff80;
  content: '';
  display: block;
  height: 1px;
  position: absolute;
  transition:
    background ease 0.3s,
    top ease 0.3s 0.3s,
    transform ease 0.3s;
  width: 20px;
}

.line .menu {
  background: #ffffff80;
  display: block;
  height: 1px;
  position: absolute;
  transition:
    background ease 0.3s,
    top ease 0.3s 0.3s,
    transform ease 0.3s;
  width: 20px;
  left: 0px;
  top: 0px;
  right: 0;
  bottom: 0;
  margin: auto;
}

.line .menu::before {
  top: -6px;
}

.line .menu::after {
  top: 6px;
}
/*
點選選單變叉叉
*/
#menu:checked + .line {
  z-index: 0;
}

#menu:checked ~ .menu-list .menu,
#menu:checked + .line .menu {
  background: transparent;
}

#menu:checked ~ .menu-list .menu::before,
#menu:checked + .line .menu::before {
  transform: rotate(45deg);
}

#menu:checked ~ .menu-list .menu::after,
#menu:checked + .line .menu::after {
  transform: rotate(-45deg);
}

#menu:checked ~ .menu-list .menu::before,
#menu:checked ~ .menu-list .menu::after,
#menu:checked + .line .menu::before,
#menu:checked + .line .menu::after {
  top: 0;
  transition:
    top ease 0.3s,
    transform ease 0.3s 0.3s;
}
/*
選單開合
*/
#menu:checked ~ .menu-list {
  width: 100%;
  height: 100vh;
}

/*
選單向外推
*/
.menu-list ul {
  list-style: none;
  padding: 0;
}
/*
隱藏核許框
*/
input#menu {
  display: none;
}

.icon-fill {
  font-variation-settings:
    'FILL' 1,
    'wght' 100,
    'GRAD' 0,
    'opsz' 48;
}
</style>
