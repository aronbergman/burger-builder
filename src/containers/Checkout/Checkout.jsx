import React from 'react'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import {connect} from "react-redux";

class Checkout extends React.Component {


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
                ingridients={this.props.ings}/>
            <Route path={this.props.match.path + '/contact-data'}
                   component={ContactData}/>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingridients
    }
};

export default connect(mapStateToProps)(Checkout);