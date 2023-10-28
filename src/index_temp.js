require('./db/mongoose');
const Gastos = require('../src/models/Gastos')
const GruposGastos = require('../src/models/GruposGastos')
const ConceptosGastos = require('../src/models/ConceptosGastos')

const bodyParser = require('body-parser')
const cors = require('cors')

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    ConceptosGastos.find({}).then((gastos) => {
        res.send(gastos)
    }).catch((error) => {
        res.status(500).send(error)
    })

})

app.get('/about', (req, res) => {  // sin versionado de rutas
    res.send("<h1>This is about</h1>");
});

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});