const posts = (state = {}, action) => {
    switch (action.type) {
        case "REQUEST_POSTS":
            state = {
                ...state,
                payload: action.payload, 
                isFetching: true
            }
            break;
        case "RECEIVE_POSTS":
            state = {
                ...state,
                payload: action.payload,
                isFetching: false
            }
            break;
        case "RECEIVE_POSTS_REJECTED":
            state = {
                ...state,
                payload: action.payload,
                isFetching: false
            }
            break;
        case "CLEAR_POSTS":
            state = {}
            break;
    }
    return state;
};

export default posts;