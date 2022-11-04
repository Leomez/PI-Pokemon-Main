const axios = require('axios');
const { Pokemon, Type } = require('../db')
// const PokemonModel = require('../models/Pokemon');
// const TypeModel = require('../models/Type');



const getPokemonsApi = async () => {
    try {
        const url = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
        const data = await url.data.results.map(e => {
            return {
                info: e.url
            }
        })
        const pokeInfo = data.map(e => axios(e.info))
        let detalle = await Promise.all(pokeInfo)
        detalle = detalle.map(el => {

            let pokemon = {
                id: el.data.id,
                name: el.data.name,
                img: el.data.sprites.other.home.front_default,
                hp: el.data.stats[0].base_stat,
                attack: el.data.stats[1].base_stat,
                defense: el.data.stats[2].base_stat,
                speed: el.data.stats[5].base_stat,
                weight: el.data.weight,
                height: el.data.height,                
                types: el.data.types.map(el => el.type.name),
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









