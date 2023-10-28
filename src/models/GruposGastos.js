const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GruposGastos = mongoose.model('grupos_gastos', new Schema({
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    gr_descripcion: String,
    gr_activo: Number,
}))

module.exports = GruposGastos