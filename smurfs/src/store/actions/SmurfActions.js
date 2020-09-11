import axios from 'axios'

//define types
export const FETCH_SMURFS = "FETCH_SMURFS"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"

export const POST_SMURFS = "POST_SMURFS"
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS"
export const POST_SMURFS_FAILURE = "POST_SMURFS_FAILURE"


//action creators
export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch ({
            type: FETCH_SMURFS
        })
        axios
            .get("/smurfs")
            .then ((response) => {
                console.log('response')
                dispatch ({type: FETCH_SMURFS_SUCCESS, payload: response.data}) 
            })
            .catch ((error) => {
                dispatch({
                    type: FETCH_SMURFS_ERROR,
                    payload: {message: "No smurfs for you!"}
                })
            })
            
    }
}

export const postSmurfs = () => {
    return(dispatch) => {
        dispatch ({
            type: POST_SMURFS
        })
        axios
            .post("/smurfs")
            .then ((response) => {
                console.log('response')
                dispatch ({type: POST_SMURFS_SUCCESS, payload: response.data}) 
            })
            .catch ((error) => {
                dispatch({
                    type: POST_SMURFS_ERROR,
                    payload: {message: "No smurfs for you!"}
                })
            })
            
    }
}
