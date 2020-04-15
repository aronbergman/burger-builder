import * as actionTypes from './actionTypes'
import axios from "../../axios-orders";

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

export const setIngridients = ingridients => {
    return {
        type: actionTypes.SET_INGRIDIENTS,
        ingridients
    }
};

export const fetchIngridientsFailed = error => {
    return {
        type: actionTypes.FETCH_INGRIDIENTS_FAILED,
        error
    }
};

export const initIngridients = () => {
    return dispatch => {
        axios.get('/ingridients.json',)
            .then(res => dispatch(setIngridients(res.data)))
            .catch(err => dispatch(fetchIngridientsFailed(err)));
    }
};