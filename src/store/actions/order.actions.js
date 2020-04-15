import * as actionTypes from './actionTypes'
import axios from "./../../axios-orders";

export const purchaseBurdeSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurdeFail = error => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
};

export const purchaseBurgerFetch = orderData => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', JSON.stringify(orderData), {
            headers: {'Content-Type': 'application/json',}
        })
            .then(res => {
                console.log('purchaseBurgerStart res ', res.data);
                dispatch(purchaseBurdeSuccess(res.data, orderData))
            })
            .catch(err => dispatch(purchaseBurdeFail(err)))
    }
};