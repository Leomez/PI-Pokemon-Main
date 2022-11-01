// import ADD_POKEMON from './actionType'
import { GET_ALL_POKEMONS } from './actionType'
// import GET_POKEMON_BY_NAME from './actionType'
// import GET_POKEMON_BY_ID from './actionType'
// import GET_POKEMONS_BY_TYPE from './actionType'
// import GET_TYPES from './actionType'
import axios from 'axios'


export const getAllPokemons = () => async dispatch => {
    const res = await axios.get('http://localhost:3001/pokemons')
    return dispatch({
        type: GET_ALL_POKEMONS,
        payload: res.data
    })
}