const name = (state = {
    name: 'Max'
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.name,
                payload: action.payload,
            }
        default:
            return state;
    }
};
export default name;