import React from 'react'
import Aux from './../../hoc/Aux'
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDriwer from "../Navigation/SideDrawer/SideDriwer";

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    sideDrawerOpenHandler = _ => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleCkicked={this.sideDrawerOpenHandler} />
                <SideDriwer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;