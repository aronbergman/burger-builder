import React from 'react'
import Aux from './../../hoc/Aux'
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDriwer from "../Navigation/SideDrawer/SideDriwer";

const Layout = props => (
    <Aux>
        <Toolbar/>
        <SideDriwer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;