import React from "react";
import './PokemonCard.css'
// import { Link } from "react-router-dom";

const PokemonCard = (props) => {
    return (
        <div className="card">
            {/* <div className="inner"> */}
                <div><img className="img" src={props.img} alt={props.name} /></div>
                <h2 className="title">
                    {props.name}
                </h2>
                <h3>Types: {props.types.map(t => {
                    return (
                        typeof(props.id) === 'string'?<span className="types" key={Object.values(t)}>{`${Object.values(t)} `}</span>:
                        <span className="types" key={t} >{`${t} `}</span>  
                    // <span className="types" key={t} >{`${t} `}</span>
                    )
                })}
                </h3>

            {/* </div> */}

        </div>
    )
}

export default PokemonCard