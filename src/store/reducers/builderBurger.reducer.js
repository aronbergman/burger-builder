import * as actionTypes from '../actions/actionTypes'

const Ingredient_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

const initalState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const builderBurgerReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_IngredientS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + Ingredient_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_IngredientS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - Ingredient_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default builderBurgerReducer;