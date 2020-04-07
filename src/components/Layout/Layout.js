import React from 'react'
import Aux from './../../hoc/Aux'
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDriwer from "../Navigation/SideDrawer/SideDriwer";

class Layout extends React.Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    sideDrawerOpenHandler = _ => {
        this.setState({showSideDrawer: true})
    };

    render() {
        return (
            <Aux>
                <Toolbar/>
                <SideDriwer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;