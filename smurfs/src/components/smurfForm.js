import React, { useState } from "react"
import {connect} from 'react-redux'
//import {postSmurfs} from '../store/actions/SmurfActions'
//import {formReducer, initialSmurfValues} from '../store/reducers/FormReducer'
//import dispatch from 'react'
import axios from 'axios'


function SmurfForm() {

    const initialSmurfValues = {        
        name :"",
        age:"",
        height:""        
    }

    const handleNameChanges = e => {
        e.preventDefault();
        setSmurf({...smurf, name: e.target.value} )
    }
    const handleAgeChanges = e => {
        e.preventDefault();
        setSmurf({...smurf, age: e.target.value} )
    }
    const handleHeightChanges = e => {
        e.preventDefault();        
        setSmurf({...smurf, height: e.target.value} )
    }

    const postSmurfs = (smurf) => {
        //return(dispatch) => {
            //dispatch ({
                //type: POST_SMURFS, payload: smurf
           // })
            axios
                .post("http://localhost:3333/smurfs", {
                    name: smurf.name,
                    age: smurf.age,
                    height: smurf.height
                })
                .then ((response) => {
                    console.log("Post", response)
                    //dispatch ({type: POST_SMURFS_SUCCESS, payload: response}) 
                })
                .catch ((error) => {
                    console.log("error")
                   // dispatch({
                        //type: POST_SMURFS_ERROR,
                        //payload: {message: "No smurfs for you!"}
                   // })
                })
                
        }

    

    const [smurf , setSmurf] = useState(initialSmurfValues) 

    return(
        
        <div className = "">
            <h1>Would you like to join the smurf village?</h1>
            <form>
                Name: <input
                type = "text"
                name = "name"
                value = {smurf.name} 
                onChange = {handleNameChanges}  
                /> 

                Age: <input
                type = "text"
                name = "age"
                value = {smurf.age} 
                onChange = {handleAgeChanges}  
                />
                
                Height: <input
                type = "text"
                name = "height"
                value = {smurf.height} 
                onChange = {handleHeightChanges}  
                />                                 
            </form>

            <button onClick = {postSmurfs(smurf)}>Join now</button>
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
    {}
) (SmurfForm)