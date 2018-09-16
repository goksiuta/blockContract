import io from 'socket.io-client'

const socket = io('http://localhost:8100')

const handleResponse = (callback) => {
  socket.on('message', msg => callback(null, msg))
}

export default handleResponse
