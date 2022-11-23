import React from "react";
import './Home.css'
import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBar from "../SearchBar/SearchBar";
import { getAllPokemons } from "../../Redux/actions";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginado from "../Paginado/Paginado";
import Filters from "../Filters/Filters";
import ErrorCard from "../ErrorCard/ErrorCard";

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)

    const [currentPage, setCurrentPage] = useState(1)  //los estados locales los puedo manejar con useState
    const [elementXPage] = useState(12)
    const [order, setOrder] = useState('');
    const indexOfLastElement = currentPage * elementXPage;
    const indexOfFirstElement = indexOfLastElement - elementXPage;
    let currentElements = pokemons.slice(indexOfFirstElement, indexOfLastElement);

    // console.log(pokemons);

    // console.log(pokemons[0]);

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => dispatch(getAllPokemons()), [])

    return (
        <div>
            <div className="banner">
                <div >
                    <img className="bannerImg" src="../../Img/pokemon.png" alt="Pokemon" />
                </div>
                <div className="searchBar">
                    <SearchBar />
                </div>
            </div>
            {/* <hr></hr> */}
            {/* <br /> */}
            <div className="resultContainer">
                <div className="filters">
                    <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
                </div>

                <Paginado
                    elementXPage={elementXPage}
                    pokemons={pokemons}
                    paginated={paginated}
                />

                <div className="results">
                    {

                        currentElements ? currentElements.map(p => {
                            // console.log(p);
                            if (p === 'pokemon no encontrado') {
                                return (
                                    <ErrorCard key={p} />
                                )
                            }
                            return (
                                // console.log(p),
                                <Link key={p.id} to={`/pokemon/${p.id}`}>
                                    <PokemonCard
                                        id={p.id}
                                        img={p.img}
                                        name={p.name}
                                        types={p.types}
                                    />
                                </Link>
                            )
                        }) :
                            <div><img src="../../Img/Spin-1s-200px.svg" alt="loading..." /></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home