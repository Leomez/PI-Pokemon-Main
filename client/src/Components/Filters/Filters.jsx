import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCreate, filterByType, getTypes, orderByAttack, orderByName } from "../../Redux/actions";
import './Filters.css'


const Filter = (props) => {
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch()
    useEffect(() => dispatch(getTypes()),[dispatch])


    function handleFilterByTypes(e) {
        props.setCurrentPage(1)
        dispatch(filterByType(e.target.value))
    }

    function handleFilterByCreates(e) {
        props.setCurrentPage(1)
        dispatch(filterByCreate(e.target.value))
    }

    function handleOrderByName(e) {
        // props.setCurrentPage(1)
        dispatch(orderByName(e.target.value))
    }

    function handleOrderByAttack(e) {
        dispatch(orderByAttack(e.target.value))
    }

    const handleClean = (e) => {
        e.preventDefault()
        dispatch(filterByType("All"))
        // dispatch(handleFilterByCreates("All"))        
    }

    return (
        <nav className="container">

            <button onClick={e => handleClean(e)}>
                Clean filters
            </button>

            <div className="orderBy">
                <p>Order by: </p>
                <span> <p>abc </p>
                    <select onChange={(e) => handleOrderByName(e)}>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </span>

                <span> <p>Attack </p> 
                    <select onChange={(e) => handleOrderByAttack(e)}>
                        <option value="max">max</option>
                        <option value="min">min</option>
                    </select>
                </span>
            </div>

            <select onChange={e => handleFilterByCreates(e)}>
                <option value="All">All</option>
                <option value="Creates">Creates</option>
                <option value="Existing">Existing</option>
            </select>

            <select onChange={e => handleFilterByTypes(e)}>
                <option value="All">All</option>
                {
                    types?.map(t => {
                        return (
                            <option key={t.id} value={`${t.name}`}>{`${t.name}`}</option>
                        )
                    })
                }
            </select>
        </nav>
    )
}


export default Filter