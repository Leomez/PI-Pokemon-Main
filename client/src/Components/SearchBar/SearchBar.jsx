import React, { useState } from "react";
import './SearchBar.css'


export default function SearchBar({onSearch}) {

    return (
        <form>
            <div className="container">
                <input type="text"
                    placeholder="Find a pokemon..."
                 />
                 <div>
                    <input type="submit"
                     />
                 </div>
            </div>
        </form>
    )
    
}