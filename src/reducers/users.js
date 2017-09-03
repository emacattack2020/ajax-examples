const users = (state = {
    isFetching: false,
    payload: []
}, action) => {
    switch (action.type) {
        case "REQUEST_USERS":
            state = {
                ...state,
                payload: action.payload, 
                isFetching: true,
            }
            break;
        case "RECIEVE_USERS":
            state = {
                ...state,
                payload: action.payload,
                isFetching: false
            }
            break;
        case "RECIEVE_USERS_REJECTED":
            state = {
                ...state,
                payload: action.payload,
                isFetching: false
            }
            break;
    }
    return state;
};

export default users;