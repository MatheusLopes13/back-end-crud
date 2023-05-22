const express = require('express')
const routes = require('./rotas/index')
const path = require("path")
const cors = require("cors")
const app = express();
app.use(cors())

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log('Servidor Rodando!');
})