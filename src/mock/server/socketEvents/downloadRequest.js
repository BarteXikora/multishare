const downloadRequest = (socket, data) => {
    socket.emit('download_response', { type: 'RES', data: { data: 'Work in progress...', name: 'Work in progress.txt' } })
}

module.exports = downloadRequest