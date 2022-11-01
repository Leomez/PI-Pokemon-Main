import React from "react";
import './Home.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../Redux/actions";
const Home = () => {

    const pokemons = useSelector(state => state.pokemons)
    const disapatch = useDispatch();
    useEffect(() => disapatch(getAllPokemons()), [])

    return (
        <div>
            <div className="banner">
                <h1>Aca van los pokemons</h1>
            </div>
            <hr></hr>
            {
                pokemons.map(p => <span>{p.name} </span>)

            }

        </div>
    )
}

export default Home