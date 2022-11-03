import React from "react";
import './Home.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../Redux/actions";
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "../SearchBar/SearchBar";
const Home = () => {

    const pokemons = useSelector(state => state.pokemons)
    const disapatch = useDispatch();
    useEffect(() => disapatch(getAllPokemons()), [])

    return (
        <div>
            <div className="banner">
                <div >
                    <img className="bannerImg" src="../../Img/pokemon.png" alt="" />
                </div>
                <div className="searchBar">
                    <SearchBar/>
                </div>                
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