// import ADD_POKEMON from './actionType'
import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID, GET_TYPES, FILTER_BY_TYPE } from './actionType'
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

export const getPokemonById = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/pokemons/${id}`)    
    return dispatch({
        type: GET_POKEMON_BY_ID,
        payload: res.data
    })
}

export const getTypes = () => async dispatch => {
    const res = await axios.get("http://localhost:3001/types")
    return dispatch({
        type: GET_TYPES,
        payload: res.data
    })
}

export const filterByType = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}