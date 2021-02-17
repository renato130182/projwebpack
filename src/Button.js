import React from "react";

function Button(params){
    const {name, onClick} = params
    return (
        <button onClick={onClick}>{
            name
            }</button>
    )
}

export default Button