import io from 'socket.io-client'
import { WEB_SOCKET_HOST } from '../utilities/config'

const socket = io(WEB_SOCKET_HOST)

socket.emit('get_projects')

export default socket