const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GastosR = mongoose.model('gastos_recurrentes', new Schema({
    id_gasto: {
        type: Schema.Types.ObjectId,
        ref: 'gastos'
    },
    gr_fecha_corte: Date,
    gr_periodo_frecuencia: String,
}))

module.exports = GastosR