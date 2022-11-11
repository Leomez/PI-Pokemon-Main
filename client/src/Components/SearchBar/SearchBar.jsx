import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../Redux/actions";

import './SearchBar.css'


export default function SearchBar() {
    const dispatch = useDispatch()    
    const [name,setName] = useState("")

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPokemonByName(name))
        console.log(name);
    }

    return (
        <form>
            <div className="container">
                <input 
                    type="text"
                    placeholder="Find a pokemon..."
                    onChange={e => handleInputChange(e)}

                 />
                 <div>
                    <button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                     >Buscar</button>
                 </div>
            </div>
        </form>
    )
    
}