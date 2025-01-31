const SOCKET_URL = 'ws://localhost:8765/'

let socket

export function connect() {
  socket = new WebSocket(SOCKET_URL)

  socket.onopen = () => {
    console.log('WebSocket connected')
  }

  socket.onmessage = (event) => {
    console.log('WebSocket message received:', event.data)
  }

  socket.onclose = () => {
    console.log('WebSocket disconnected')
  }

  socket.onerror = (error) => {
    console.error('WebSocket error:', error)
  }
}

export function sendMessage(message) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message))
  }
}

export function joinRoom(room) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type: 'join_room', room }))
  }
}

export function disconnect() {
  if (socket) {
    socket.close()
  }
}
