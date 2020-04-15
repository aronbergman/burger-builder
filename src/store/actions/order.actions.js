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
                dispatch(purchaseBurdeSuccess(res.data, orderData))
            })
            .catch(err => dispatch(purchaseBurdeFail(err)))
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
};

export const fetchOrdersSuccess = orders => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
};

export const fetchOrdersFail = error => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        errror: error
    }
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json')
            .then(res => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }

                dispatch(fetchOrdersSuccess(fetchOrders));

            })
            .catch(err => {
                dispatch(fetchOrdersFail(err))
            })
    }
};