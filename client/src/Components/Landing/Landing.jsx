import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'


const Landing = () => {
    // const pokemons = useSelector(state => state.pokemons)
    return (
        <div className='landing'>            
            <Link to="/pokemons"><img  className='button' src="../../../Img/pokebola.png" alt="" /></Link>
        </div>

    )

}

export default Landing;
