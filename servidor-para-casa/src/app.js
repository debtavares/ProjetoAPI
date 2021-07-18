const express = require('express')
const app = express()
const index = require("./routes/index")
const contatos = require('./routes/toDoRoutes')

app.use(express.json())

app.use("/", index)
app.use("/contatos", contatos);

module.exports = app