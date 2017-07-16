import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    PlayerChange,
    Credits
} from '.';
import { appActions } from '../actions';

class StartScreen extends Component {
    render() {
        const { startGame, gotoCredits } = this.props;
        return (
            <div className="start-screen">
                <h1>Total War: Tarifvertrag</h1>
                <div className="buttons">
                    <button onClick={startGame}>Start</button>
                    <button onClick={gotoCredits}>Credits</button>
                </div>
            </div>
        )
    }
}
StartScreen.id = "start_screen";

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch, getState, c){
    return {
        startGame: () => appActions.changeView(dispatch)(PlayerChange.id),
        gotoCredits: () => appActions.changeView(dispatch)(Credits.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
