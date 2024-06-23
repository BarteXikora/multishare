const { responde } = require('../functions/responde')

const downloadRequest = (socket) => {
    const response = { type: 'RES', data: { data: 'Work in progress...', name: 'Work in progress.txt' } }

    responde(socket, 'download_response', response)
}

module.exports = downloadRequest