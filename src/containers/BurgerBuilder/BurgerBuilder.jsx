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

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(isKey => {
                return ingredients[isKey]
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
                <Burger ingredients={this.props.ings}/>
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
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
                ingredients={this.props.ings}/>;
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
        ings: state.ingredients,
        price: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: ingredientName => dispatch(builderBurgerActions.addIngredient(ingredientName)),
        onIngredientRemoved: ingredientName => dispatch(builderBurgerActions.removedIngredient(ingredientName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));