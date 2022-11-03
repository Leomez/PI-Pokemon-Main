import React from "react";
import './PokemonCard.css'

const PokemonCard = (props) => {
    return (
        <div className="card">
            {/* <div className="inner"> */}
                <div><img className="img" src={props.img} alt={props.name} /></div>
                <h2 className="title">
                    {props.name}
                </h2>
                <h3>Types: {props.types.map(t => {
                    return (<span className="types">{`${t} `}</span>)
                })}
                </h3>

            {/* </div> */}

        </div>
    )
}

export default PokemonCard