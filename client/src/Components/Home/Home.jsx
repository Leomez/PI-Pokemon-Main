import React from "react";
import './Home.css'
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "../SearchBar/SearchBar";
import { getAllPokemons } from "../../Redux/actions";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {

    const {currentPage, setCurrentPage} = useState(1)  //los estados locales los puedo manejar con useState
    const {elementXPage, setElementXPage} = useState(6)
    const indexOfLastElement = currentPage * elementXPage;
    const indexOfFirstElement = elementXPage - indexOfLastElement;

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)      

    }

    const pokemons = useSelector(state => state.pokemons)
    const disapatch = useDispatch();
    useEffect(() => disapatch(getAllPokemons()), [])

    const handleClick = (e) => {
        e.preventDefault()
        disapatch(getAllPokemons())
    }

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
            <button onClick = {e=>{handleClick(e)}}>
                recargar
            </button>
            <select>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>

            <select>
                <option value="all">Todos</option>
                <option value="create">Creados</option>
                <option value="api">Existentes</option>
            </select>

            <select name="Tipo" id="">
                <option value="all">Todos</option>

            </select>

            <div className="results">
                {
                   pokemons && pokemons.map(p => {
                        return (
                            // console.log(p),
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