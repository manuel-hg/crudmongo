require('dotenv').config();
require('./db/connection');

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const usuarios = require('./routes/usuarios')
const gruposgastos = require('./routes/gruposgastos')

const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(cors())

app.use('/api/usuarios', usuarios)
app.use('/api/gruposgastos', gruposgastos)

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});