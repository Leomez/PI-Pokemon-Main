const pokemons = require('../controllers/pokemons')
const { Router } = require('express');
const Pokemon = require('../models/Pokemon');
const Type = require('../models/Type');
const router = Router()

router.get('/pokemons', async (req, res) => {
    await pokemons;
    pokemons ?
        res.status(200).send(pokemons) :
        res.status(404).send('pagina no encontrada')
})

router.post('/pokemon', async (req, res) => {

    let  {
        id,
        name,
        img,
        hp,
        attack,
        defense,
        speed,
        weight,
        height,
        type
    } = req.body

    let pokemonCreated = await Pokemon.create({
        id,
        name,
        img,
        hp,
        attack,
        defense,
        speed,
        weight,
        height,

    })

    let typeDb = await Type.finAll({
        where: {name: type}
    })

    pokemonCreated.addType(typeDb)
    res.send('¡Pokemon creado con exito!')
})