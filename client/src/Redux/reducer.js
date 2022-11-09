// import ADD_POKEMON from './actionType'
import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID, GET_TYPES, FILTER_BY_TYPE } from './actionType'
// import GET_POKEMON_BY_NAME from './actionType'
// import GET_POKEMON_BY_ID from './actionType'
// import FILTER_BY_TYPE from './actionType'
// import GET_TYPES from './actionType'



const initialState = {
    pokemons: [],
    pokemonDetails: [],
    pokemonsByType: [],
    types: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS: {
            return {
                ...state,
                pokemons: action.payload
            }
        }
        
        case GET_POKEMON_BY_ID: {
            return {
                ...state,
                pokemonDetails: action.payload
            }
        }

        case GET_TYPES: {
            return {
                ...state,
                types: action.payload
            }
        }

        case FILTER_BY_TYPE: {
            const allPokemons = state.pokemons;
            const leakedPokemons = action.payload === 'all'? allPokemons : allPokemons.filter(p => p.types.includes(action.payload))
            console.log(action.payload);
            return {
                ...state,
                pokemons: leakedPokemons
            }
        }
        default: 
            return state
    }
    
}