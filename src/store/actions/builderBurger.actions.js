import * as actionTypes from './actionTypes'
import axios from "../../axios-orders";

export const addIngredient = name => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: name
    }
};

export const removedIngredient = name => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: name
    }
};

export const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients
    }
};

export const fetchIngredientsFailed = error => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
        error
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json',)
            .then(res => dispatch(setIngredients(res.data)))
            .catch(err => dispatch(fetchIngredientsFailed(err)));
    }
};