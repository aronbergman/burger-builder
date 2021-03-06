import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('OrderSummary | WillUpdate')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicius burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout</p>
                <p><strong>Total Proce:</strong> {this.props.price.toFixed(2)}</p>
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
            </Aux>
        )
    }
};

export default OrderSummary;