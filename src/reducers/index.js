const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return { ...state, loading: true };
        case 'PRODUCTS_RECEIVED':
            return { ...state, products: action.json, loading: false };

        default:
            return state;
    }
}

export default reducer;