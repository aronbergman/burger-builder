import * as actionTypes from '../actions/actionTypes'

const INGRIDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

const initalState = {
    ingridients: null,
    totalPrice: 4,
    error: false
};

const builderBurgerReducer = (state = initalState, action) => {
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

export default builderBurgerReducer;