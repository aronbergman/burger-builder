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
            {
                controls.map(ctrl => {
                    return <BuildControl
                        added={() => props.ingridientAdded(ctrl.type)}
                        remove={() => props.ingridientRemoved(ctrl.type)}
                        key={ctrl.type}
                        label={ctrl.label}
                        type={ctrl.type}
                    />
                })
            }
        </div>
    )
};

export default buildControls;