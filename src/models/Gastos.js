const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Gastos = mongoose.model('fondo_ingreso', new Schema({
    id_grupo_gasto: {
        type: Schema.Types.ObjectId,
        ref: 'grupos_gastos'
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    id_tipo_pago: {
        type: Schema.Types.ObjectId,
        ref: 'tipo_pago'
    },
    id_concepto_gasto: {
        type: Schema.Types.ObjectId,
        ref: 'conceptos_gastos'
    },
    gs_detalle: String,
    gs_fecha: Date,
    gs_monto: Schema.Types.Decimal128,
    gs_fecha_actual: Date,
    gs_recurrente: Boolean,
    gs_estatus: Number
}))

module.exports = Gastos