import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";


import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {smurfReducer} from './store/reducers/SmurfReducer'

const store = createStore(smurfReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider>
<App />
</Provider>
, document.getElementById("root"));
