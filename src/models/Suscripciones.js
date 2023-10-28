const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Suscripciones = mongoose.model('suscripciones', new Schema({
    id_plan: {
        type: Schema.Types.ObjectId,
        ref: 'planes'
    },
    susc_fecha_pago: Date,
    susc_fecha_vigencia: Date,
    susc_estatus: Number 
}))

module.exports = Suscripciones
