const { getAllPokemons } = require('../controllers/pokemons')
const { Router } = require('express');
const Pokemon = require('../models/Pokemon');
const Type = require('../models/Type');
const router = Router()

router.get('/', async (req, res) => {
    const name = req.query.name
    let allPokemons = await getAllPokemons()
    if (name) {
        let pokemon = allPokemons.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        pokemon.length?
        res.status(200).send(pokemon) :
        res.status(404).send('pokemon no encontrado')
    } else {
        res.status(200).send(allPokemons)
    }        
})

router.post('/', async (req, res) => {
    
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

module.exports = router;