import React, {Component} from 'react';
import {connect} from 'react-redux';

import { StartScreen } from '.';
import { appActions } from '../actions';
import { ProgressBar } from '../components';

class MatchGoals extends Component {
    render() {
        const { gotoStart, progress, statType } = this.props;

        return (
            <div>
                <h1>Match Goals</h1>
                <ul className="goal-list">
                    <li>1. Ziel</li>
                    <li>2. Ziel</li>
                    <li>3. Ziel</li>
                </ul>
                <div className="handicap">
                    <h2 className="subheadline">Handicap</h2>
                    <p>25% Moral</p>
                    <ProgressBar progress={progress} statType={statType} />
                </div>
                <button onClick={gotoStart}>Zurück</button>
            </div>
        )
    }
}
MatchGoals.id = "match_goals";

function mapStateToProps(state) {
    const playerType = "boss";
    const stats = state.app.players[playerType].stats;

    return {
        progress: 20,
        statType: state
    };
}

function matchDispatchToProps(dispatch){
    return {
        gotoStart: () => dispatch(appActions.changeView(StartScreen.id)),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(MatchGoals);
