import axios from 'axios'

//define types
export const FETCH_SMURFS = "FETCH_SMURFS"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"
export const PURGE_VILLAGE = "PURGE_VILLAGE"

// export const POST_SMURFS = "POST_SMURFS"
// export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS"
// export const POST_SMURFS_ERROR = "POST_SMURFS_ERROR"


//action creators
export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch ({
            type: FETCH_SMURFS
        })
        axios
            .get("http://localhost:3333/smurfs")
            .then ((response) => {
                console.log("Get", response)
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

export const purgeVillage = () => {
    return {
    type: PURGE_VILLAGE
}}



// export const postSmurfs = (smurf) => {
//     return(dispatch) => {
//         dispatch ({
//             type: POST_SMURFS, payload: smurf
//         })
//         axios
//             .post("http://localhost:3333/smurfs")
//             .then ((response) => {
//                 console.log("Post", response)
//                 dispatch ({type: POST_SMURFS_SUCCESS, payload: response}) 
//             })
//             .catch ((error) => {
//                 dispatch({
//                     type: POST_SMURFS_ERROR,
//                     payload: {message: "No smurfs for you!"}
//                 })
//             })
            
//     }
// }
