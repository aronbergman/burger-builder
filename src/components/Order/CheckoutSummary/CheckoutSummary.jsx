import React from 'react';
import classes from './CheckoutSummary.module.scss'
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div className={classes.CheckoutSummaryWrap}>
                <Burger ingridients={props.ingridients}/>
            </div>
            <Button
                clicked
                btnType="Danger">CANCEL</Button>
            <Button btnType="Success">SUCCESS</Button>
        </div>
    )
};

export default checkoutSummary;
