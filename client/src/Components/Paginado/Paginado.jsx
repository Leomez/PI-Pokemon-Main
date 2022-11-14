import React from "react";
import './Paginado.css'




const Paginado = (props) => {

    const { elementXPage, pokemons, paginated }  =  props;
    const pageNumbers = [];
    
    for (let i = 0; i < Math.ceil(pokemons.length / elementXPage); i++) {
        pageNumbers.push(i + 1)
    }

    // console.log(pokemons.length);
    // console.log(elementXPage);
    // console.log(pageNumbers)
    return (        
        <nav>
            <ul className="paginated">
                {
                    pageNumbers && pageNumbers.map(pag =>{ 
                       return (
                        <li className="pag" key={pag}>
                            <button onClick={() => paginated(pag)}>{pag}</button>
                            {/* {console.log(pag)} */}
                        </li>
                            
                    )})
                }
            </ul>
        </nav>        
    )
}

export default Paginado