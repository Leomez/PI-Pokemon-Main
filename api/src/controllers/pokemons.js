const pokemons_base = require('../models/Pokemon')
const axios = require('axios')

const getPokemonsApi = async () => {
        const url = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const data = url.data.results.map(e => {
            return {
                name: e.name,
                info: e.url
            }
            // return async () => {
            //     const pokemonUrl = await axios.get(e.url)
            //     // const pokemonInfo = await pokemonUrl
            //     return pokemonUrl}
            })

        console.log(data.info);//no vas a poser xq data es un arreglo, no cada objeto
        return data;
    }

// const pokeInfo = async () => {    

//         const url = await axios.get(getPokemonsApi.info)
//         const data = url.data
//         console.log(data)
//     }


    // get_con_f: async () => {
    //     const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    //     const data = await res.json();
    //     return data
    // },

// console.log(controller.getPokemonsApi())
console.log(getPokemonsApi())
