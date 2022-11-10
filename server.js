const { randomUUID } = require("crypto")
const { application } = require("express")
const express = require("express")
const { appendFile } = require("fs")
const crypto = require("crypto")
const { routerWeb } = require("./Routers/routerWeb.js")
const { routerApi } = require("./Routers/routerApi.js")





//------------------------------------------------

const app = express()

//middleware: software que se coloca entre 2 procesos

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Rutas WEB
app.use("/", routerWeb)

//Rutas api rest
app.use("/api/cosas", routerApi)


const server = app.listen(8080)
