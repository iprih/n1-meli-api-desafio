const express = require("express")
const router = express.Router()
const controller = require('../controllers/listaFilmesController')

router.get("/", controller.get)

router.get("/lista", controller.getListaDeFilmes)







module.exports = router