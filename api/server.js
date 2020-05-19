const express = require('express')
const server = express()
const helmet = require('helmet')
const morgan =  require('morgan')
const cors = require('cors')
const session = require('express-session')

const usersRouter = require('../users/users-router')
const authRouter = require('../auth/router')


server.use(express.json(),helmet(), morgan('short'),cors())

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.get('/', (req,res) => {
    res.json( { api: 'Up Up and Away!' })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'Error processing the request.' })
})

module.exports = server