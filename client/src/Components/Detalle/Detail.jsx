import React from "react";
import './Detail.css';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { getPokemonById } from "../../Redux/actions";

const Detail = () => {

    const detail = useSelector( state => state.pokemonDetails);
    const dispatch = useDispatch()
    useEffect(() => dispatch(getPokemonById(detail.id)), [])
    console.log(detail);

    return(
        <div>
            detalle de {detail.name}
        </div>
    )

}

export default Detail