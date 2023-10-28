const express = require('express')
const Usuarios = require('../models/Usuarios')

const router = express.Router()

console.log("entro a usuarios")

router.get('/', async (req, res) => {
    const usuarios = await Usuarios.find().exec()
    res.status(200).send(usuarios)
})

router.get('/:id', async ({params: {id}}, res) => {
    const usuario = await Usuarios.findById(id).exec()
    res.status(200).send(usuario)
})

router.post('/', async (req, res) => {
    await Usuarios.create(req.body)
    res.status(201)
})

router.put('/:id', async ({params: {id}, body}, res) => {
    await Usuarios.findOneAndUpdate(id, body)
    res.status(204)
})

router.delete('/:id', async ({params: {id}}, res) => {
    await Usuarios.findOneAndDelete(id).exec()
    res.status(204)
})

module.exports = router