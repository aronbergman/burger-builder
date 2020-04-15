import React from 'react';
import {connect} from 'react-redux'
import axios from "./../../axios-orders";
import * as builderBurgerActions from "../../store/actions/index";

import Aux from '../../hoc/Aux/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class BurgerBuilder extends React.Component {

    state = {
        totalPrice: 4,
        purchaseble: false,
        purchasing: false
    };

    componentDidMount() {
        console.log(this.props);
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
        onIngridientAdded: ingredientName => dispatch(builderBurgerActions.addIngredient(ingredientName)),
        onIngridientRemoved: ingredientName => dispatch(builderBurgerActions.removedIngredient(ingredientName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));