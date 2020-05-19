const router = require('express').Router()

const Users = require('./users-model')

function restricted(req, res, next) {
    return async (req, res, next) => {
        try{

        } catch(err) {
            next(err)
        }
    }
}

router.get('/', async (req, res, next) => {
    try{
        const users = await Users.find()
        res.json(users)
    } catch(err) {
        next(err)
    }
})

module.exports = router