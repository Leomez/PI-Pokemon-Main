import React from "react";
import './Home.css'
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "../SearchBar/SearchBar";
import { getAllPokemons, getTypes } from "../../Redux/actions";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginado from "../Paginado/Paginado";
import Filters from "../Filters/Filters";

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)

    const [currentPage, setCurrentPage] = useState(1)  //los estados locales los puedo manejar con useState
    const [elementXPage, setElementXPage] = useState(12)
    const indexOfLastElement = currentPage * elementXPage;
    const indexOfFirstElement = indexOfLastElement - elementXPage;
    let currentElements = pokemons.slice(indexOfFirstElement, indexOfLastElement);    

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => dispatch(getAllPokemons()), [])    

    return (
        <div>
            <div className="banner">
                <div >
                    <img className="bannerImg" src="../../Img/pokemon.png" alt="" />
                </div>
                <div className="searchBar">
                    <SearchBar />
                </div>
            </div>
            <hr></hr>

            <div className="filters">
                <Filters setCurrentPage = {setCurrentPage}/>                   
            </div>
            
            <Paginado
                elementXPage={elementXPage}
                pokemons={pokemons}
                paginated={paginated}
            />

            <div className="results">
                {
                    currentElements && currentElements.map(p => {
                        return (
                            // console.log(p),
                            <Link to={`/pokemon/${p.id}`}>
                                <PokemonCard
                                    key={p.id}
                                    img={p.img}
                                    name={p.name}
                                    types={p.types}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home