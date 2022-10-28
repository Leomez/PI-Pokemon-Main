const axios = require('axios');
const { Pokemon, Type } = require('../db')
// const PokemonModel = require('../models/Pokemon');
// const TypeModel = require('../models/Type');



const getPokemonsApi = async () => {
    try {
        const url = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=5&limit=5');
        const data = await url.data.results.map(e => {
            return {
                info: e.url
            }
        })
        const pokeInfo = data.map(e => axios(e.info))
        let detalle = await Promise.all(pokeInfo)
        detalle = detalle.map(el => {

            let pokemon = {
                img: el.data.sprites.other.home.front_default,
                name: el.data.name,
                id: el.data.id,
                types: el.data.types.map(el => el.type.name),
                height: el.data.height,
                stats: el.data.stats.map(el => el),
                weight: el.data.weight
            }
            // console.log(pokemon);
            return pokemon
        })
        return detalle

    } catch (error) {
        console.log(' api error ==> ' + error);
    }

}

const getPokemonsDb = async () => {
    try {
        return await Pokemon.findAll({
            // attributes: ['img', 'name', 'id', 'types', 'height', 'stats', 'weight'],
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        })
    } catch (error) {
        console.log(' db error ==> ' + error);
    }

}

const getAllPokemons = async () => {
    try {
        const apiPoke = await getPokemonsApi();
        const dbPoke = await getPokemonsDb();
        const allPoke = apiPoke.concat(dbPoke)

        return allPoke
    } catch (error) {
        console.log(error);
    }
}



module.exports = { getAllPokemons }









