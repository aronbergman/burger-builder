import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from "../../UI/Button/Button";

const orderSummary = props => {
    const ingridientSummary = Object.keys(props.ingridients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingridients[igKey]}
            </li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicius burger with the following ingridients:</p>
            <ul>
                {ingridientSummary}
            </ul>
            <p>Continue to Checkout</p>
            <p><strong>Total Proce:</strong> {props.price.toFixed(2)}</p>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;