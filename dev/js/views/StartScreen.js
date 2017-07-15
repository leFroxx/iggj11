import React, {Component} from 'react';
import {connect} from 'react-redux';

import { MatchGoals } from '.';
import { appActions } from '../actions';

class StartScreen extends Component {
    render() {
        const { gotoMatchGoals } = this.props;
        return (
            <div className="start-screen">
                <h1>Arbeitskampf</h1>
                <div className="buttons">
                    <button onClick={gotoMatchGoals}>Start</button>
                    <button>Credits</button>
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

function matchDispatchToProps(dispatch){
    return {
        gotoMatchGoals: () => {
            dispatch(appActions.initPlayers());
            dispatch(appActions.changeView(MatchGoals.id));
        },
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(StartScreen);
