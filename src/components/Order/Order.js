import React from "react";
import classes from './Order.module.scss'

const order = props => {
    const ingridients = [];

    for (let ingridientName in props.ingridients) {
        ingridients.push({
            name: ingridientName,
            amount: props.ingridients[ingridientName]
        })
    }

    console.log('props.ingridients', props.ingridients)
    console.log('ingridients', ingridients)

    const ingridientOutput = ingridients.map(ig => {
        return <span style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }}
            key={ig.name}>{ig.name} ({ig.amount}); </span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingridients: {ingridientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
};

export default order;