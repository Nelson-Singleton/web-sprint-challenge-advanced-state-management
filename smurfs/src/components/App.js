import React, { useEffect } from "react";
import "./App.css";

import {fetchSmurfs} from '../store/actions/SmurfActions'
import {connect} from 'react-redux'

import SmurfForm from '../components/smurfForm'
import SmurfVillage from '../components/smurfVillage'


function App ({fetchSmurfs}) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs])

    return (
      <div className="App">

        <SmurfForm />
        <SmurfVillage />
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
  {fetchSmurfs}
  ) (App);
