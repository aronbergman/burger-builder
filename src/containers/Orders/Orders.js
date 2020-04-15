import React from 'react';
import axios from "./../../axios-orders";
import * as actions from './../../store/actions/index'
import {connect} from "react-redux";

import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends React.Component {

    componentDidMount() {
        this.props.onFetchOrders()
    }

    render() {
        return this.props.loading
            ? <Spinner/>
            : <div>
                {
                    this.props.orders.map(order => (
                        <Order
                            price={order.price}
                            ingredients={order.ingredients}
                            key={order.id}
                        />
                    ))
                }
            </div>
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));