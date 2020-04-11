import React from 'react';
import classes from './Burger.module.scss'

import BurgerIngridient from './BurgerIngridient/BurgerIngridient'
import {withRouter} from "react-router-dom";

const Burger = props => {
    console.log('this props burger', props);
    let transformedIngredients = Object.keys(props.ingridients)
        .map(igKey => {
            console.log('Object.keys(props.ingridients)', Object.keys(props.ingridients), igKey)
            return [...Array(props.ingridients[igKey])]
                .map((_, i) => {
                    console.log('...Array(props.ingridients[igKey])]', [...Array(props.ingridients[igKey])], i)
                    return <BurgerIngridient key={igKey + i} type={igKey}/>;
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
            <BurgerIngridient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngridient type='bread-bottom'/>
        </div>
    )
};

export default withRouter(Burger);