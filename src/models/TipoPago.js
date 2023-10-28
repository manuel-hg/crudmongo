const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TipoPago = mongoose.model('tipo_pago', new Schema({
    tipo_pago: String,
}))

module.exports = TipoPago