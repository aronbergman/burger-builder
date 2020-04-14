import * as actionTypes from './actions'

const initalState = {
    ingridients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGRIDIENTS:
            return {
                ...state,
                ingridients: {
                    ...state.ingridients,
                    [action.ingridientName]: state.ingridients[action.ingridientName] + 1
                }
            };
        case actionTypes.REMOVE_INGRIDIENTS:
            return {
                ...state,
                ingridients: {
                    ...state.ingridients,
                    [action.ingridientName]: state.ingridients[action.ingridientName] - 1
                }
            };
        default:
            return state;
    }
};

export default reducer;