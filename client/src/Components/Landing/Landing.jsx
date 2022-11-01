import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
    // const pokemons = useSelector(state => state.pokemons)
    return (
        <>
            <h1>Henry Pokemon</h1>
            <Link to="/pokemons"><button>¡Atrapalos ya!</button></Link>
        </>

    )

}

export default Landing;
