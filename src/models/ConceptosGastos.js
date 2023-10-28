const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConceptosGastos = mongoose.model('conceptos_gastos', new Schema({
    id_grupo_gasto: {
        type: Schema.Types.ObjectId,
        ref: 'grupos_gastos'
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    c_conceptos_gasto: String,
    c_activo: Number,
}))

module.exports = ConceptosGastos