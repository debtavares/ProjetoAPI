const express = require('express')
const router = express.Router()
const controller = require('../controllers/toDoControllers')

router.get('/', controller.getAll)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.register)

router.delete("/:id", controller.deletec)

module.exports = router