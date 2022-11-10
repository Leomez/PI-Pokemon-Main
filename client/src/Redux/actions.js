// import ADD_POKEMON from './actionType'
import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID, GET_TYPES, FILTER_BY_TYPE, FILTER_BY_CREATE, ORDER_BY_NAME } from './actionType'
// import GET_POKEMON_BY_NAME from './actionType'
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

export const filterByCreate = (payload) => {
    if (payload === 'Creates') payload = 'string';
    if (payload === 'Existing') payload = 'number';
    
    return {
        type: FILTER_BY_CREATE,
        payload
    }
}

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}