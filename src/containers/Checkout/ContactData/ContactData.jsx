import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.scss'

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter you Contact Data</h4>
                <form action="">
                    <input type="text" name="name" placeholder="Your name"/>
                    <input type="text" name="email" placeholder="Your email"/>
                    <input type="text" name="street" placeholder="Your street"/>
                    <input type="text" name="postal-code" placeholder="Your postal code"/>
                    <Button type="Seccess" clicked>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;