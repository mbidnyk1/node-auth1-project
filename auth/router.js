const bcryptsjs = require('bcryptjs')

const router = require('express').Router()

const Users = require('../users/users-model')
const { isValid } = require('../users/users-service')

router.post('/register', async (req, res, next) => {
    try {
        const credentials = req.body
        if( isValid(credentials)) {
            const user = await Users.add(credentials)
            res.status(201).json(user)
        } else {
            res.status(400).json({
                message: 'Please provide a username and an alphanumeric password'
            })
        }
    } catch(err) {
        next(err)
    }
})

router.post('/login', async (req, res, next) => {
    try{
        const { username, password } = req.body
        const user = await Users.findBy( { username }).first()
        if (user) {
            res.status(200).json({
                message: `Welcome ${user.username}!`
            })
        } else {
            res.status(401).jason({
                message: 'Invalid Credentials'
            })
        } 
    } catch(err) {
            next(err)
        }
})

module.exports = router