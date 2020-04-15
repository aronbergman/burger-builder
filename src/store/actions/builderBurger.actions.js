import * as actionTypes from './actionTypes'

export const addIngredient = name => {
    return {
        type: actionTypes.ADD_INGRIDIENTS,
        ingredientName: name
    }
};

export const removedIngredient = name => {
    return {
        type: actionTypes.REMOVE_INGRIDIENTS,
        ingredientName: name
    }
};