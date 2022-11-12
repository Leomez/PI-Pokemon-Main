import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../Redux/actions";



const Create = () => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types)
    const [value, setValue] = useState(0)

    const [input, setInput] = useState({
        name: "",
        img: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        weight: 0,
        height: 0,
        types: []
    })

    useEffect(() => dispatch(getTypes()), [])



    // const bgrSize = () => {
    //     return { backgroundSize: `${(value * 100) / 10}% 100%` }
    // };


    return (
        <div>
            <h1>¡Crea tu propio Pokermon!</h1>
            <form>
                <label>Name: </label>
                <input type="text" value={input.name} name="name" />

                <label>Image: </label>
                <input type="text" value={input.img} name="img" />

                <label>Health: </label>
                <input
                    max={100}
                    type="range"
                    value={input.hp}
                    name="hp"
                // style={bgrSize()}
                // onChange={e}
                />

                <label>Health: </label>
                <input
                    max={100}
                    type="range"
                    value={input.hp}
                    name="hp"
                // style={bgrSize()}
                // onChange={e}
                />

                <label>Attack: </label>
                <input
                    max={100}
                    type="range"
                    value={input.attack}
                    name="hp"
                // style={bgrSize()}
                // onChange={e}
                />

                <label>Defense: </label>
                <input
                    max={100}
                    type="range"
                    value={input.defense}
                    name="hp"
                // style={bgrSize()}
                // onChange={e}
                />

                <label>Speed: </label>
                <input
                    max={100}
                    type="range"
                    value={input.speed}
                    name="hp"
                // style={bgrSize()}
                // onChange={e}
                />

                <label>Weight: </label>
                <input
                    max={100}
                    type="range"
                    value={input.weight}
                    name="hp"
                // style={bgrSize()}
                // onChange={e}
                />

                <label>Height: </label>
                <input
                    max={100}
                    type="range"
                    value={input.height}
                    name="hp"
                // style={bgrSize()}
                // onChange={e}
                />
            </form>
        </div>
    )
}


export default Create