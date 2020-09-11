import React from 'react'
import {connect} from 'react-redux' 
import Smurf from "../components/smurf"

function SmurfVillage(props) {
    
    return(
        <div> 
            <h1>
                Current Smurfs
            </h1>
            {props.smurfs.map(someSmurf => (
            <Smurf key = {someSmurf.id} someSmurf = {someSmurf} />
        ))}
        </div>
    )
}

const mapStateToProps = state => { 
    return { 
      smurfs: state.smurfs
    }} 
  
  export default connect(
    mapStateToProps,
    {}
    ) (SmurfVillage);