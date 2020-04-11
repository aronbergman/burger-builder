import React from 'react'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends React.Component {
    state = {
        ingridients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingridients = {};
        for (let param of query) {
            ingridients[param[0]] = +param[1]
        }
        console.log('this.props.location.search',this.props.location.search)
        console.log('query',query);
        console.log('ingridients',ingridients);
        this.setState({ingridients: ingridients})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    };

    render() {
        return (<div>
            <CheckoutSummary
                onCheckoutCancelled={this.checkoutCancelledHandler}
                onCheckoutContinued={this.checkoutContinuedHandler}
                ingridients={this.state.ingridients}/>
        </div>);
    }
};

export default Checkout;