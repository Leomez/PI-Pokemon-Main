import React from "react";
import './Create.css'
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, getTypes } from "../../Redux/actions";
import { useHistory } from "react-router-dom";



const Create = () => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    // const [value, setValue] = useState(0);
    const history = useHistory();

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

    useEffect(() => dispatch(getTypes()), [dispatch])

    const handleChange = (e) => {
        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )
    }


    const handleType = (e) => {
        setInput({
            ...input,
            types : [...input.types, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        dispatch(addPokemon(input))
        alert("Pokemon Created!")
        setInput({
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
        history.push('/home')
    }

    // const handleClose = (e) => {
    //     e.preventDefaul();
    //     setInput({
    //         ...input,
    //         types: input.types.filter(t => t != e.target.value)
    //     })
    // }


    // const bgrSize = () => {
    //     return { backgroundSize: `${(value * 100) / 10}% 100%` }
    // };


    return (
        <div>
            <h1>Create your own Pokemon!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Name: </label>
                <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={e => handleChange(e)}
                />

                <label>Image: </label>
                <input
                    type="text"
                    value={input.img}
                    name="img"
                    onChange={e => handleChange(e)}
                />

                <div className="features">

                    <label>Health: </label>
                    <div>
                        <input
                            max={100}
                            type="range"
                            value={input.hp}
                            name="hp"
                            onChange={e => handleChange(e)}
                        // style={bgrSize()}
                        // onChange={e}
                        />
                        {input.hp}
                    </div>

                    <label>Attack: </label>
                    <div>
                        <input
                            max={100}
                            type="range"
                            value={input.attack}
                            name="attack"
                            onChange={e => handleChange(e)}
                        // style={bgrSize()}
                        // onChange={e}
                        />
                        {input.attack}
                    </div>

                    <label>Defense: </label>
                    <div>
                        <input
                            max={100}
                            type="range"
                            value={input.defense}
                            name="defense"
                            onChange={e => handleChange(e)}
                        // style={bgrSize()}
                        // onChange={e}
                        />
                        {input.defense}
                    </div>

                    <label>Speed: </label>
                    <div>
                        <input
                            max={100}
                            type="range"
                            value={input.speed}
                            name="speed"
                            onChange={e => handleChange(e)}
                        // style={bgrSize()}
                        // onChange={e}
                        />
                        {input.speed}
                    </div>

                    <label>Weight: </label>
                    <div>
                        <input
                            max={100}
                            type="range"
                            value={input.weight}
                            name="weight"
                            onChange={e => handleChange(e)}
                        // style={bgrSize()}
                        // onChange={e}
                        />
                        {input.weight}
                    </div>

                    <label>Height: </label>
                    <div>
                        <input
                            max={100}
                            type="range"
                            value={input.height}
                            name="height"
                            onChange={handleChange}
                        // style={bgrSize()}
                        // onChange={e}
                        />
                        {input.height}
                    </div>
                </div>

                <div className="typeSelect">
                <label>Type: </label>
                <select onChange={e => handleType(e)} >
                    <option value=""></option>
                    {
                        types?.map(t => {
                            return (
                                <option key={t.id} value={`${t.name}`}>{`${t.name}`}</option>
                            )
                        })
                    }
                </select>
                <ul>{input.types.map(t => {
                    return(
                       
                        <div>
                            <li key={t}> {t}  <button>x</button></li>
                            
                        </div>
                    )
                })}</ul>

                </div>

                {/* <input
                    max={100}
                    type="range"
                    value={input.hp}
                    name="hp"
                // style={bgrSize()}
                // onChange={e}
                /> */}

                <button type="submit" >Create</button>
            </form>
        </div>
    )
}


export default Create