// import ADD_POKEMON from './actionType'
import {
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_ID,
    GET_TYPES,
    FILTER_BY_TYPE,
    FILTER_BY_CREATE,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    GET_POKEMON_BY_NAME,
    ADD_POKEMON,
    CLEAR_DETAILS
} from './actionType'

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

export const orderByAttack = (payload) => {
    return {
        type: ORDER_BY_ATTACK,
        payload
    }
}

export const getPokemonByName = (name) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        console.log(res.data);
        return dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: res.data
        })

    } catch (error) {
        console.log(error.response.data);
        return dispatch( {
            type: GET_POKEMON_BY_NAME,
            payload: [error.response.data]
        })
    }
}

export const addPokemon = (data) => {
    const res = axios.post('http://localhost:3001/pokemons', data)
    console.log(res);
    return {
        type: ADD_POKEMON,
        res
    }
}

export const clearDetails = () => {
    return {
        type: CLEAR_DETAILS
    }
}