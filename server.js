const express = require('express')

const server = express();

const postRouter = require('./data/post-router')

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>WINTER IS HERE!!!!!</h1>')
})

server.use('/api/posts', postRouter)

// export server
module.exports = server;