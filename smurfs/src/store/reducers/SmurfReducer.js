import {FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR, POST_SMURFS, POST_SMURFS_SUCCESS, POST_SMURFS_ERROR} from '../actions/SmurfActions'
const initialState = {
    smurfs: [],
    fetchError: "",
    loadingSmurfs: true,
    sendingSmurfs: true,
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SMURFS:
            return{}

        case FETCH_SMURFS_SUCCESS:
            return{}
        
        case FETCH_SMURFS_ERROR:
            return{}

        case POST_SMURFS:
            return{}

        case POST_SMURFS_SUCCESS:
            return{}
        
        case POST_SMURFS_ERROR:
            return{}
            
        default:
            return state;
    }
}