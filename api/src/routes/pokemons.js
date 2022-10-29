const { getAllPokemons } = require('../controllers/pokemons')
const { Router } = require('express');
const { Pokemon, Type } = require('../db')
// const Pokemon = require('../models/Pokemon');
// const Type = require('../models/Type');
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

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    let allPokemons = await getAllPokemons()
    if(id) {
        let pokemon = allPokemons.filter(el => el.id == id)
        pokemon?
        res.status(200).send(pokemon):
        res.status(404).send('pokemon no encontrado')
    }
})

router.post('/', async (req,res) => {
    //si puedo refactorizo...
    let { type } = req.body

    let pokemonCreated = await Pokemon.create ({
        name : req.body.name,
        img : req.body.img,
        hp : req.body.hp,
        attack : req.body.attack,
        defense : req.body.defense,
        speed : req.body.speed,
        weight : req.body.weight,
        height : req.body.height
    })

    let typeDb = await Type.findAll({
        where: {name: type}
    })

    pokemonCreated.addType(typeDb)
    console.log(pokemonCreated);
    res.send('¡Pokemon creado con exito!')
    })

module.exports = router;