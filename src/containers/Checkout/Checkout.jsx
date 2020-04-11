import React from 'react'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends React.Component {
    state = {
        ingridients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };

    render() {
        return (<div>
            <CheckoutSummary ingridients={this.state.ingridients}/>
        </div>);
    }
};

export default Checkout;