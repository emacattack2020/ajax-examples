const posts = (state = {
    isFetching: false,
    payload: []
}, action) => {
    switch (action.type) {
        case "REQUEST_POSTS":
            return {
                ...state,
                payload: action.payload, 
                isFetching: true
            }
        case "RECEIVE_POSTS":
            return {
                ...state,
                payload: action.payload,
                isFetching: false
            }
        case "RECEIVE_POSTS_REJECTED":
            return {
                ...state,
                payload: action.payload,
                isFetching: false
            }
        case "CLEAR_POSTS":
            return {}
        default:
            return state;
    }
};

export default posts;