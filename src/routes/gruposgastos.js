const express = require('express')
const GruposGastos = require('../models/GruposGastos')

const router = express.Router()

router.get('/', async (req, res) => {
    const grupos = await GruposGastos.find().exec()
    res.status(200).send(grupos)
})

// modelo padre GruposGastos
router.get('/prueba', async (req, res) => {
    const resultado = await GruposGastos.aggregate(
        [
            {
                $lookup:{
                    from: "usuarios", // documento hijo
                    localField: "id_usuario", // campo de modelo padre
                    foreignField: "_id", // campo de modelo hijo
                    as: "usuarioGrupoGasto"
                }
            },
            {$unwind: {
                path: "$usuarioGrupoGasto",
                preserveNullAndEmptyArrays: true // left join 
            } },
            {$match: {gr_activo: 1}}
        ]
    )
    res.status(200).send(resultado);
});

router.get('/:id', async ({params: {id}}, res) => {
    const grupo = await GruposGastos.findById(id).exec()
    res.status(200).send(grupo)
})

router.post('/', async (req, res) => {
    await GruposGastos.create(req.body)
    res.status(201)
})

router.put('/:id', async ({params: {id}, body}, res) => {
    await GruposGastos.findOneAndUpdate(id, body)
    res.status(204)
})

router.delete('/:id', async ({params: {id}}, res) => {
    await GruposGastos.findOneAndDelete(id).exec()
    res.status(204)
})

module.exports = router