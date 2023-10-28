const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cupones = mongoose.model('cupones', new Schema({
    cup_codigo: String,
    cup_descuento: Schema.Types.Decimal128,
    cup_fecha_inicio: Date,
    cup_fecha_vencimiento: Date,
    cup_activo: Number,
    cup_estatus: Number
}))

module.exports = Cupones