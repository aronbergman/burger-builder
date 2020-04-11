import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.scss'
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import {withRouter} from "react-router-dom";

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
        await this.setState({loading: true});

        const order = {
            ingridients: this.props.ingridients,
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

        await axios.post('/orders.json', JSON.stringify(order), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(() => {
                this.setState({loading: false});
                // this.props.history.push('/');
            })
            .catch(() => this.setState({loading: false}))
    };

    render() {
        let form = <form action="">
            <input type="text" name="name" placeholder="Your name"/>
            <input type="text" name="email" placeholder="Your email"/>
            <input type="text" name="street" placeholder="Your street"/>
            <input type="text" name="postal-code" placeholder="Your postal code"/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>;
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter you Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData);