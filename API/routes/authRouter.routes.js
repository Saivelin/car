const Router = require('express')
const router = new Router()
const controller = require('../controllers/auth.controller')

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/getUsers', controller.getUsers)

module.exports = router