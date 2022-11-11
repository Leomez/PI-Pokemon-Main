// import ADD_POKEMON from './actionType'
import { 
    GET_ALL_POKEMONS, 
    GET_POKEMON_BY_ID, 
    GET_TYPES, 
    FILTER_BY_TYPE, 
    FILTER_BY_CREATE, 
    ORDER_BY_NAME,
    ORDER_BY_ATTACK, 
    GET_POKEMON_BY_NAME
} from './actionType'
// import GET_POKEMON_BY_NAME from './actionType'
// import GET_POKEMON_BY_ID from './actionType'
// import FILTER_BY_TYPE from './actionType'
// import GET_TYPES from './actionType'



const initialState = {
    pokemons: [],
    allPokemons: [],
    pokemonDetails: [],   
    types: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS: {
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        }
        
        case GET_POKEMON_BY_ID: {
            return {
                ...state,
                pokemonDetails: action.payload
            }
        }

        case GET_POKEMON_BY_NAME: {
            console.log('llego al reducer...');
            return {
                ...state,
                pokemons: action.payload
            }
        }

        case GET_TYPES: {
            return {
                ...state,
                types: action.payload
            }
        }

        case FILTER_BY_TYPE: {
            const allPokemons = state.allPokemons;
            const leakedPokemons = action.payload === 'All'? allPokemons : allPokemons.filter(p => p.types.includes(action.payload))
            console.log(action.payload);
            return {
                ...state,
                pokemons: leakedPokemons
            }
        }

        case FILTER_BY_CREATE: {
            const allPokemons = state.allPokemons;
            const leakedPokemons = action.payload === 'All'? allPokemons : allPokemons.filter(p => typeof(p.id) === action.payload)
            console.log(action.payload);
            return {
                ...state,
                pokemons: leakedPokemons
            }
        }

        case ORDER_BY_NAME: {
            let sorted = action.payload === 'asc' ?
            state.allPokemons.sort((a,b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            }) : state.allPokemons.sort((a,b)=> {
                if(a.name > b.name) return -1;
                if(a.name < b.name) return 1;
                return 0;
            })
            console.log(sorted);
            return {
                ...state,
                pokemons: sorted
            }
        }

        case ORDER_BY_ATTACK: {
            let sorted = action.payload === 'min' ?
            state.allPokemons.sort((a,b) => {
                if(a.attack > b.attack) return 1;
                if(a.attack < b.attack) return -1;
                return 0;
            }) : state.allPokemons.sort((a,b) => {
                if(a.attack > b.attack) return -1;
                if(a.attack > b.attack) return 1;
                return 0
            })
            return {
                ...state,
                pokemons: sorted
            }
        }
        
        default: 
            return state
    }
    
}