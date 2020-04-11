import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/" component={BurgerBuilder} exact/>
            </Switch>
        </Layout>
    );
}

export default App;
