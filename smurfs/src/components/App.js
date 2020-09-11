import React, { useEffect } from "react";
import "./App.css";

import {fetchSmurfs, postSmurfs} from '../store/actions/SmurfActions'
import {connect} from 'react-redux'


function App ({fetchSmurfs}, {postSmurfs}) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }


const mapStateToProps = state => { 
  return { 
    smurfs: state.smurfs,
    loadingSmurfs: state.loadingSmurfs,
    sendingSmurfs: state.sendingSmurfs,
  }} 

export default connect(
  mapStateToProps,
  {fetchSmurfs, postSmurfs}
  ) (App);
