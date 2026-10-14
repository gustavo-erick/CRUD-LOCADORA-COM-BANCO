const express = require("express")

const testRoutes = require("./routes/testRoutes")
const generoRoutes = require("./routes/generoRoutes")
const filmeRoutes = require("./routes/filmesRoutes")
const diretorRoutes = require("./routes/DiretorRoutes")

const app = express()

app.use(express.json())

app.use("/test", testRoutes)
app.use("/generos", generoRoutes)
app.use("/filmes", filmeRoutes)
app.use("/diretor", diretorRoutes)

app.get("/", (req, res) => {
    res.send("API locadora funcionando!!")
})

module.exports = app