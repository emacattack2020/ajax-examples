import axios from "axios";

export function getPosts(userId){
    return function(dispatch){
        dispatch({
            type:'REQUEST_POSTS', 
            isFetching: true, 
            payload: []
        });
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => {
                console.log("RECEIVE_POSTS:", response.data);
                dispatch({
                    type:'RECEIVE_POSTS', 
                    payload:response.data
                });
            })
            .catch((err) => {
                console.log("RECEIVE_POSTS_ERROR");
                dispatch({
                    type:'RECEIVE_POSTS_REJECTED', 
                    isFetching: false, 
                    payload:err
                });
            })
    }
}