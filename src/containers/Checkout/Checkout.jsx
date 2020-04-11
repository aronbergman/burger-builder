import React from 'react'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends React.Component {
    state = {
        ingridients: null,
        totalPrice: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingridients = {};
        let price = 0;
        for (let param of query) {
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingridients[param[0]] = +param[1]
            }
        }
        console.log('this.props.location.search', this.props.location.search);
        console.log('query', query);
        console.log('ingridients', ingridients);
        this.setState({ingridients: ingridients, totalPrice: price})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    };

    checkoutContinuedHandler = () => {
        console.log('checkoutContinuedHandler')
        this.props.history.replace('/checkout/contact-data')
    };

    render() {
        return (<div>
            <CheckoutSummary
                onCheckoutCancelled={this.checkoutCancelledHandler}
                onCheckoutContinued={this.checkoutContinuedHandler}
                ingridients={this.state.ingridients}/>
            <Route path={this.props.match.path + '/contact-data'}
                   render={() => (<ContactData ingridients={this.state.ingridients} price={this.state.totalPrice}/>)}/>
        </div>);
    }
};

export default Checkout;