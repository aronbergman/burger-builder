import React from 'react';
import classes from './Burger.module.scss'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import {withRouter} from "react-router-dom";

const Burger = props => {
    console.log('this props burger', props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log('Object.keys(props.ingredients)', Object.keys(props.ingredients), igKey)
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    console.log('...Array(props.ingredients[igKey])]', [...Array(props.ingredients[igKey])], i)
                    return <BurgerIngredient key={igKey + i} type={igKey}/>;
                })
        })
        .reduce((arr, el) => {
            console.log('arr', arr);
            console.log('el', el);
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
};

export default withRouter(Burger);