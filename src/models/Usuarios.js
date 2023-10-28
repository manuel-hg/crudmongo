const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuarios = mongoose.model('usuarios', new Schema({
    us_nombres: String,
    us_apellidop: String,
    us_apellidom: String,
    us_fecha_nac: Date,
    us_genero: Number,
    us_email: String,
    us_password: String,
    us_salt: String
}))

module.exports = Usuarios