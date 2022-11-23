import React from "react";
import  './ErrorCard.css'
import errorImg from "../../assets/img/sad.png"


export default function ErrorCard (){
    return(
        <div className="errorCard">
            <h1 className="titleErr">Pokemon not found...</h1>
            <div>
                <img className="errorImg" src={errorImg} alt="pokemon not found" />
            </div>

        </div>
    )
}