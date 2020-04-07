import React from 'react'
import classes from './BuildControls.module.scss'
import BuildControl from "../../../components/Burger/BuildControls/BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(ctrl => (
                    <BuildControl
                        added={() => props.ingridientAdded(ctrl.type)}
                        remove={() => props.ingridientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                        key={ctrl.type}
                        label={ctrl.label}
                        type={ctrl.type}
                    />
                ))}
            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.ordered}>
                ORDER NOW
            </button>
        </div>
    )
};

export default buildControls;