import React from 'react'

function Smurf(props) {
    return(
        <div className = "smurfcard">
            <h2>Smurf: # {props.someSmurf.id}</h2>
            <h2>Name: {props.someSmurf.name}</h2>
            <h2>Age: {props.someSmurf.age}</h2>
            <h2>Height: {props.someSmurf.height}</h2> 
        </div>
    )
}

export default Smurf