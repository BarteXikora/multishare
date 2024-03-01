const express = require('express')

const server = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ ok: true })
})

server.use('/api', router)
server.listen(3001, () => { console.log('Server is listening on port 3001.') })