import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

function App() {
    return (
        <Layout>
            <BurgerBuilder/>
            <Checkout/>
        </Layout>
    );
}

export default App;
