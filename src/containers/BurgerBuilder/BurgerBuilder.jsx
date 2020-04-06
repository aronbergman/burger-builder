import React from 'react';
import Aux from '../../hoc/Aux'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;