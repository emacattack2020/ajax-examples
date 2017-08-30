const name = (state = {
    name: 'Max'
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.name,
                payload: action.payload,
            }
            break;
    }
    return state;
};

export default name;