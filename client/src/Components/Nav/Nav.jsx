import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {
    
        return (
            <div>
                <Link to={'/'}>
                    <span><img src="../../logo.svg" alt="logo" /></span>
                </Link>
                <Link to={'/pokemons'}>
                    Home
                </Link>
                <Link to={'/create'}>
                    Create
                </Link>
            </div>
        )
 
}

export default Nav