import * as actionTypes from './actions'

const initalState = {
    ingridients: null,
    totalPrice: 4
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGRIDIENTS:
            return {

            }
    }

    return state;
};

export default reducer;