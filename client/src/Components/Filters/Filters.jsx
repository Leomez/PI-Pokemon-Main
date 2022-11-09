import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByType, getTypes } from "../../Redux/actions";
import './Filters.css'


const Filter = (props) => {
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch()
    useEffect(() => dispatch(getTypes()), [dispatch])


    function handleFilterByTypes(e) {
        dispatch(filterByType(e.target.value))
    }

    return (
        <nav className="container">

            <button onClick={e => props.handleClick(e)}>
                Clean filters
            </button>

            <div className="orderBy">
                <p>Order by: </p>
                <span> <p>abc </p>
                    <select className="orderSelect">
                        <option value="asc">A to Z</option>
                        <option value="desc">Z to A</option>
                    </select>
                </span>

                <span> <p>Attack </p> 
                    <select clasName="orderSelect">
                        <option value="max">max</option>
                        <option value="min">min</option>
                    </select>
                </span>
            </div>

            <select>
                <option value="all">Todos</option>
                <option value="create">Creados</option>
                <option value="api">Existentes</option>
            </select>

            <select onChange={e => handleFilterByTypes(e)}>
                <option value="all">All</option>
                {
                    types?.map(t => {
                        return (
                            <option value={`${t.name}`}>{`${t.name}`}</option>
                        )
                    })
                }
            </select>
        </nav>
    )
}


export default Filter