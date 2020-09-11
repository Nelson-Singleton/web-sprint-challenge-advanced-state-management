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
            return{
                ...state,
               // loadingSmurfs: true
            }

        case FETCH_SMURFS_SUCCESS:
            return{
                ...state, 
                smurfs: action.payload,
               // loadingSmurfs: false
            }
        
        case FETCH_SMURFS_ERROR:
            return{
                ...state,
                //loadingSmurfs: false,
                //fetchError: action.payload.message 
            }

        // case POST_SMURFS:
        //     return{
        //         ...state,
        //         sendingSmurfs: true
        //     }

        // case POST_SMURFS_SUCCESS:
        //     return{
        //         ...state,
        //         smurfs: action.payload,
        //         sendingSmurfs: false
        //     }
        
        // case POST_SMURFS_ERROR:
        //     return{
        //         ...state,
        //         sendingSmurfs: false,
        //         fetchError: action.payload.message

        //     }
            
        default:
            return state;
    }
}