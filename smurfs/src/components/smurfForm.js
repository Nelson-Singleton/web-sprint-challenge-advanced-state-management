import React, { useState } from "react"
import {connect} from 'react-redux'
import {postSmurfs} from '../store/actions/SmurfActions'


function SmurfForm({postSmurfs}) {

    const handleChanges = e => {
        e.preventDefault();
    }

    const [smurf ,updateSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    return(
        
        <div className = "">
            <h1>Would you like to join the smurf village???</h1>
            <form>
                Name: <input
                type = "text"
                name = "name"
                //value = 
                //onChange =   
                />                
            </form>
            <form>
                Age: <input
                type = "text"
                name = "age"
                //value = 
                //onChange =   
                />                
            </form>
            <form>
                Height: <input
                type = "text"
                name = "height"
                //value = 
                //onChange =   
                />                
            </form>
            <button onClick = {postSmurfs}>Join now</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs
    }
}

export default connect (
    mapStateToProps,
    {postSmurfs}
) (SmurfForm)