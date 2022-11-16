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
                                <p>ID: {info.id}</p>
                                <hr />
                                <div className="description">
                                    <div className="item">
                                        <i class="weight-icon"><img src="../../Img/weight.png" alt="weight" /></i>
                                        <p>Weight: {info.weight}</p>
                                    </div>
                                    <div className="item">
                                        <i class="ruler-icon"><img src="../../Img/height.png" alt="height" /></i>
                                        <p>Height: {info.height}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="content">
                                <div>
                                    <p>Estadisticas</p>
                                    <ul className="list">
                                        <li>Health: {info.hp}</li>
                                        <li>Attack: {info.attack}</li>
                                        <li>Defense: {info.defense}</li>
                                        <li>Speed: {info.speed}</li>
                                    </ul>
                                </div>
                                <hr className="divider" />
                                <div>
                                    <p>Tipos</p>
                                    <ul className="list">
                                        {info.types.map(t => {
                                            return (
                                                <li className="text" key={t} >{`${t} `}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div> :

                    
                    <div>
                        <div><img src="../../Img/Spin-1s-200px.svg" alt="loading..."/></div>
                    </div>
            }
        </div>
    )

}

export default Detail