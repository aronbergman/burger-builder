import React from 'react';
import Aux from '../../hoc/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGRIDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

class BurgerBuilder extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseble: false
    };

    updatePurchaseState(ingridients) {
        const sum = Object.keys(ingridients)
            .map(isKey => {
                return ingridients[isKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchaseble: sum > 0})
    }

    addIngridientHandler = type => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingridients};
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrise = this.state.totalPrice;
        const newPrice = oldPrise + priceAddition;

        this.setState({totalPrice: newPrice, ingridients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngridientHandler = type => {
        const oldCount = this.state.ingridients[type];
        if (oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingridients};
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrise = this.state.totalPrice;
        const newPrice = oldPrise - priceAddition;

        this.setState({totalPrice: newPrice, ingridients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    render() {
        const disabledInfo = {
            ...this.state.ingridients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls
                    ingridientAdded={this.addIngridientHandler}
                    ingridientRemoved={this.removeIngridientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchaseble}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;