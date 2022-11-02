import React from "react";
import './Home.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../Redux/actions";
import PokemonCard from "../PokemonCard/PokemonCard";
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
            <div className="results">
                {
                    pokemons.map(p => {
                        return (
                            console.log(p),
                            <PokemonCard
                                key={p.id}
                                img={p.img}
                                name={p.name}
                                types={p.types}
                            />
                        )
                    })

                }

            </div>

        </div>
    )
}

export default Home