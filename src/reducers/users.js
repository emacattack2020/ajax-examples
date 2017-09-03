const users = (state = {
    isFetching: false,
    payload: []
}, action) => {
    switch (action.type) {
        case "REQUEST_USERS":
            return {
                ...state,
                payload: action.payload, 
                isFetching: true,
            }
        case "RECIEVE_USERS":
            return {
                ...state,
                payload: action.payload,
                isFetching: false
            }
        case "RECIEVE_USERS_REJECTED":
            return {
                ...state,
                payload: action.payload,
                isFetching: false
            }
        default:
          return state;
    }
};

export default users;