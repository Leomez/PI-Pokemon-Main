import React from "react";
import './Nav.css'
import { Link } from "react-router-dom"

const Nav = () => {
    
        return (
            <div className="nav">
                <Link to={'/'}>
                    <span className="logo"><img src="../../Img/Henry-Pokemon.png" alt="logo" /></span>
                </Link>
                <div className="buttons">
                    <Link to={'/pokemon'}>
                        Home
                    </Link>
                    <Link to={'/create'}>
                        Create
                    </Link>

                </div>
            </div>
        )
 
}

export default Nav