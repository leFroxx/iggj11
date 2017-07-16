import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    MatchGoals,
    Credits
} from '.';
import { appActions } from '../actions';

class StartScreen extends Component {
    render() {
        const { gotoMatchGoals, gotoCredits } = this.props;
        return (
            <div className="start-screen">
                <h1>Arbeitskampf</h1>
                <div className="buttons">
                    <button onClick={gotoMatchGoals}>Start</button>
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
        gotoMatchGoals: () => appActions.changeView(dispatch)(MatchGoals.id),
        gotoCredits: () => appActions.changeView(dispatch)(Credits.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
