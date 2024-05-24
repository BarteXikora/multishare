const getUserProject = (socket) => {
    for (const room of socket.rooms) return room
}

module.exports = getUserProject