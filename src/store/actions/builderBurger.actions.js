import * as actionTypes from './actionTypes'
import axios from "../../axios-orders";

export const addIngredient = name => {
    return {
        type: actionTypes.ADD_IngredientS,
        ingredientName: name
    }
};

export const removedIngredient = name => {
    return {
        type: actionTypes.REMOVE_IngredientS,
        ingredientName: name
    }
};

export const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_IngredientS,
        ingredients
    }
};

export const fetchIngredientsFailed = error => {
    return {
        type: actionTypes.FETCH_IngredientS_FAILED,
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