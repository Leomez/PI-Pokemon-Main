import React from "react";
import './Detail.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getPokemonById } from "../../Redux/actions";

const Detail = (props) => {

    const detail = useSelector(state => state.pokemonDetails);
    const dispatch = useDispatch()
    useEffect(() => dispatch(getPokemonById(props.match.params.id)), [dispatch])

    const info = detail[0]

    return (
        <div className="mainContainer">
            {
                detail.length > 0 ?
                    <div className="container">
                        <section className="description">
                            <img className="descImg" src={`${info.img}`} alt={`${info.name}`} />
                            <div className="descInfo">
                                <h1 className="name">{info.name}</h1>
                                <h4>Tipos: </h4>
                                {info.types.map(t => {
                                    return (
                                        <span className="text" key={t} >{`${t} `}</span>
                                    )
                                })}
                                <h4>ID: </h4> <span className="text">{info.id}</span>
                            </div>
                        </section>
                        <section className="statistics">
                            <h1>Estadísticas</h1>
                            <div className="statisticsBox">
                                <div className="chart" >Helth: {info.hp}</div>
                                <div className="chart" >Attack: {info.attack}</div>
                                <div className="chart" >Defense: {info.defense}</div>
                                <div className="chart" >Speed: {info.speed}</div>
                            </div>
                            <div>
                                <h3>Weight: </h3> <span className="text">{info.weight}</span>
                                <h3>Height: </h3> <span className="text">{info.height}</span>
                            </div>
                        </section>
                        detalle de {info.name}
                    </div>
                    : <div>
                        loading...
                    </div>
            }
        </div>
    )

}

export default Detail