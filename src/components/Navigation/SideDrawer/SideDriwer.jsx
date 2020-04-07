import React from "react";
import Logo from '../../Logo/Logo'
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDriwer.module.scss'

const SideDriwer = props => {
    return (
        <div className={classes.SideDriwer}>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
};

export default SideDriwer;