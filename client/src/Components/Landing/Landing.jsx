import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Landing = () => {
    // const pokemons = useSelector(state => state.pokemons)
    return (
    <>
        <h1>Henry Pokemon</h1>
        <button><Link to="/pokemons">¡Atrapalos ya!</Link></button>
    </>
        
    )

}

export default Landing;
