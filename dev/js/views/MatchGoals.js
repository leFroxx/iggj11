import React, {Component} from 'react';
import {connect} from 'react-redux';

import { StartScreen } from '.';
import { appActions } from '../actions';

class MatchGoals extends Component {
    render() {
        const { gotoStart } = this.props;
        return (
            <div>
                <h1>Match Goals</h1>
                <button onClick={gotoStart}>Zurück</button>
            </div>
        )
    }
}
MatchGoals.id = "match_goals";

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch){
    return {
        gotoStart: () => dispatch(appActions.changeView(StartScreen.id)),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(MatchGoals);
