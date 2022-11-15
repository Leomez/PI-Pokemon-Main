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

    const bgrImg = () => {
        return { backgroundImage: `url(${info.img})` }
    };

    return (
        <div className="mainContainer">
            {
                detail.length > 0 ?

                    <div className="card">
                        <div className="image" style={bgrImg()}>
                            <h6>{info.name}</h6>
                        </div>
                        <div className="card_info">
                            <div className="head">
                                <p className="title">{info.name}</p>
                                <div className="description">
                                    <div className="item">
                                        <p>Weight: {info.weight}</p>
                                    </div>
                                    <div className="item">
                                        <p>Height: {info.height}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="content">
                                <p>Estadisticas</p>
                                <ul className="list">
                                    <li>Health: {info.hp}</li>
                                    <li>Attack: {info.attack}</li>
                                    <li>Defense: {info.defense}</li>
                                    <li>Speed: {info.speed}</li>
                                </ul>
                                <hr />
                                <p>Tipos</p>
                                <ul>
                                    {info.types.map(t => {
                                        return (
                                            <li className="text" key={t} >{`${t} `}</li>
                                        )
                                    })}
                                </ul>
                                <hr />
                                <p>ID: {info.id}</p>
                            </div>
                        </div>
                    </div> :

                    // <div className="container">
                    //     <section className="description">
                    //         <img className="descImg" src={`${info.img}`} alt={`${info.name}`} />
                    //         <div className="descInfo">
                    //             <h1 className="name">{info.name}</h1>
                    //             <h4>Tipos: </h4>
                    //             {info.types.map(t => {
                    //                 return (
                    //                     <span className="text" key={t} >{`${t} `}</span>
                    //                 )
                    //             })}
                    //             <h4>ID: </h4> <span className="text">{info.id}</span>
                    //         </div>
                    //     </section>

                    //     <section className="statistics">
                    //         <h1>Estadísticas</h1>
                    //         <div className="statisticsBox">
                    //             <div className="chart" >Helth: {info.hp}</div>
                    //             <div className="chart" >Attack: {info.attack}</div>
                    //             <div className="chart" >Defense: {info.defense}</div>
                    //             <div className="chart" >Speed: {info.speed}</div>
                    //         </div>
                    //         <div>
                    //             <h3>Weight: </h3> <span className="text">{info.weight}</span>
                    //             <h3>Height: </h3> <span className="text">{info.height}</span>
                    //         </div>
                    //     </section>

                    // </div> :
                    <div>
                        loading...1,2,3
                    </div>
            }
        </div>
    )

}

export default Detail