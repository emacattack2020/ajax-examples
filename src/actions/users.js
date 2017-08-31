import axios from "axios";

export function getUsers(){
    return function(dispatch){
        dispatch({
            type:'REQUEST_USERS', 
            isFetching: true, 
            payload: []
        });
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log("RECIEVE_USERS:", response.data);
                dispatch({
                    type:'RECIEVE_USERS', 
                    payload:response.data
                });
            })
            .catch((err) => {
                console.log("RECIEVE_USERS_ERROR");
                dispatch({
                    type:'RECIEVE_USERS_REJECTED', 
                    payload:err
                });
            })
    }
}