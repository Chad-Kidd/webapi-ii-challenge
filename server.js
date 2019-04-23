const express = require('express')

const server = express();

const postRouter = require('./postRouter.js')

server.use(express.json());

server.get('/', (req, res) => {
    res.send('AEGON TARGARYEN!!!!!')
})

server.use('/api/posts', postRouter)

// export server
module.exports = server;