import React from "react";
import Logo from '../../Logo/Logo'
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDriwer.module.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from "../../../hoc/Aux";

const SideDriwer = props => {
    let attachedClasses = [classes.SideDriwer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDriwer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height='10%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default SideDriwer;