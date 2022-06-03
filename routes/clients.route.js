const {Router} = require('express')
const {userController} =  require('../controllers/clients.controller')

const route = Router()

route.get('/users', userController.gitController)

route.get('/users/:id', userController.getIdControllers)

route.post('/users', userController.postController)

route.patch('/users/:id', userController.pathController)

route.delete('/users/:id', userController.deleteController)

module.exports = route