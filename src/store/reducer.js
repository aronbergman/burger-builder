import * as actionTypes from './actions'

const INGRIDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

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
                    [action.ingredientName]: state.ingridients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGRIDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGRIDIENTS:
            return {
                ...state,
                ingridients: {
                    ...state.ingridients,
                    [action.ingredientName]: state.ingridients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGRIDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;