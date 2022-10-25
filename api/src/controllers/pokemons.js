const pokemons_base = require('../models/Pokemon')
const axios = require('axios')

const controller = {
    // get_pokemons_api: async () => {
    //     const url = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //     const data = await url.data;
    //     console.log(data)
    // },

    // get_con_f: async () => {
    //     const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    //     const data = await res.json();
    //     return data
    // },

    getMovies: (title) => async () => {
        const res = await fetch(`http://www.omdbapi.com/?&apikey=4352d24e&s=${title}`);
        const data = await res.json();
        return console.log(data)
           
    }
}

console.log(controller.getMovies('Manuelita'))

