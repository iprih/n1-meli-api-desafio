const express = require("express")
const app = express()

const filmes = require("./routes/filmesRoute")


app.use('/', filmes)



module.exports = app    