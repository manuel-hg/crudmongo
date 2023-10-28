const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FondoIngreso = mongoose.model('fondo_ingreso', new Schema({
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    in_monto: Schema.Types.Decimal128,
    in_fecha: Date,
    in_detalle: String,
}))

module.exports = FondoIngreso