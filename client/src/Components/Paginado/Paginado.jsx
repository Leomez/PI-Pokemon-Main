import React from "react";
import './Paginado.css'




const Paginado = (props) => {

    const { elementXPage, pokemons, paginated }  =  props;
    const pageNumbers = [];
     console.log(elementXPage);

    for (let i = 0; i <= Math.ceil(pokemons.length / elementXPage); i++) {
        pageNumbers.push(i + 1)
    }

    {console.log(pageNumbers)}
    return (        
        <nav>
            <ul className="paginated">
                {
                    pageNumbers && pageNumbers.map(pag => (
                        <li className="pag" key={pag}>
                            <a onClick={() => paginated(pag)}>{pag}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>        
    )
}

export default Paginado