import React from "react";
import {connect} from "react-redux";
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.scss'
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import {withRouter} from "react-router-dom";
import * as actions from "../../../store/actions/index";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,

    };

    orderHandler = async event => {
        await event.preventDefault();

        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            customer: {
                name: 'Max',
                address: {
                    street: '',
                    zipCode: 1234,
                    country: 'France'
                },
                email: 'brgmn@icloud.com'
            },
            deliveryMethod: 'fastest'
        };
        console.log('order', order);
        this.props.onOrderBurger(order)
    };

    render() {
        let form = <form action="">
            <input type="text" name="name" placeholder="Your name"/>
            <input type="text" name="email" placeholder="Your email"/>
            <input type="text" name="street" placeholder="Your street"/>
            <input type="text" name="postal-code" placeholder="Your postal code"/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>;
        if (this.props.loading) {
            form = <Spinner/>
        }
        if (!this.props.ings) {
            this.props.history.push('/')
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter you Contact Data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: orderData => dispatch(actions.purchaseBurgerFetch(orderData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(ContactData, axios)));