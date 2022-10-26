const pokemons_base = require('../models/Pokemon')
const axios = require('axios');


const getPokemonsApi = async () => {
    const url = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=5&limit=5');
    const data = await url.data.results.map(e => {
        return {
            name: e.name,
            info: e.url
        }
    })
    const pokeInfo = data.map(e => axios(e.info))

    const info = Promise.all(pokeInfo)
        .then(res => res.map(el => {
            
            let pokemon = {
                img: el.data.sprites.other.home.front_default,
                name: el.data.name,
                id: el.data.id,
                types: el.data.types,
                height: el.data.height,
                stats: el.data.stats,
                weight: el.data.weight
            }   
            console.log(pokemon);
            return pokemon
        }
        ))
        return info
}

console.log(getPokemonsApi())


// const { data: {
            //     sprites: { other: { home: { front_default } } },
            //     name,
            //     id,
            //     types,
            //     heigth,
            //     stats,
            //     weight
            // }} = el;
            // const pokemon = {
            //     img: front_default,
            //     name,
            //     id,
            //     types,
            //     heigth,
            //     stats,
            //     weight
            // }


