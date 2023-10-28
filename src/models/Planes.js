const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Planes = mongoose.model('planes', new Schema({
    pl_nombre_plan: String,
    pl_descripcion: String,
    pl_vigencia_meses: Number,
    pl_vigencia_descuento: Date,
    pl_precio: Schema.Types.Decimal128,
    pl_descuento: Schema.Types.Decimal128,
}))

module.exports = Planes