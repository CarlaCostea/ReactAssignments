import React from 'react'
import './UserInput.css'

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid blue'
    };

    return (
            <input id="UserInput" type="text" style={inputStyle} onChange={props.changed} value={props.name}/>
    )
}

export default userInput;