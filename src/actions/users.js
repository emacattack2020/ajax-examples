import axios from "axios";

export function getUsers(){
    return function(dispatch){
        dispatch({
            type:'REQUEST_USERS', 
            isFetching: true, 
            payload: []
        });
        dispatch({
            type:'CLEAR_POSTS'
        });
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch({
                    type:'RECIEVE_USERS', 
                    payload:response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type:'RECIEVE_USERS_REJECTED', 
                    payload:err
                });
            })
    }
}