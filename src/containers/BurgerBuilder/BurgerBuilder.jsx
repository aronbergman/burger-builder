import React from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'

import Aux from '../../hoc/Aux/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from "./../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class BurgerBuilder extends React.Component {

    state = {
        totalPrice: 4,
        purchaseble: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/ingridients.json',)
            .then(res => {
                this.setState({ingridients: res.data});
                console.log('ingridients get', res.data)
            })
            .catch(err => this.setState({error: true}));
    }

    updatePurchaseState(ingridients) {
        const sum = Object.keys(ingridients)
            .map(isKey => {
                return ingridients[isKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        this.props.history.push({
            pathname: '/checkout'
        })
    };

    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = this.state.error ? <p>Ingrigients can't be loadded</p> : <Spinner/>;
        let orderSummary = null;

        if (this.props.ings) {
            burger = (<Aux>
                <Burger ingridients={this.props.ings}/>
                <BuildControls
                    ingridientAdded={this.props.onIngridientAdded}
                    ingridientRemoved={this.props.onIngridientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    price={this.props.price}
                    ordered={this.purchaseHandler}
                />
            </Aux>);

            orderSummary = <OrderSummary
                price={this.props.price}
                cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                ingridients={this.props.ings}/>;
        }

        if (this.state.loading) orderSummary = <Spinner/>;

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                       modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingridients,
        price: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngridientAdded: ingredientName => dispatch({type: actionTypes.ADD_INGRIDIENTS, ingredientName}),
        onIngridientRemoved: ingredientName => dispatch({type: actionTypes.REMOVE_INGRIDIENTS, ingredientName})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));