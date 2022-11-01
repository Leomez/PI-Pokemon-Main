// import ADD_POKEMON from './actionType'
import { GET_ALL_POKEMONS } from './actionType'
// import GET_POKEMON_BY_NAME from './actionType'
// import GET_POKEMON_BY_ID from './actionType'
// import GET_POKEMONS_BY_TYPE from './actionType'
// import GET_TYPES from './actionType'



const initialState = {
    pokemons: [],
    pokemonDetails: {},
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
        default:
            return state
    }
    
}