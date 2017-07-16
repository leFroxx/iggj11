import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    StartScreen,
    MatchGoals,
    MatchNegotiation
} from '.';
import { appActions } from '../actions';
import { ProgressBar } from '../components';
import { config, l } from '../tools';
import { playerTypes } from '../models';

class PlayerChange extends Component {
    componentWillMount() {
        this.props.setNextPlayerActive();
    }
    render() {
        const { activePlayer, gotoNextView, gotoStart } = this.props;

        const activePlayerName = activePlayer ? l("player_" + activePlayer) : null;

        return (
            <div className="player-change">
                <h1>
                    <span className={activePlayer}>{activePlayerName}</span> ist am Zug
                </h1>
                <button onClick={gotoNextView}>Weiter</button>
                <button onClick={gotoStart}>Zurück</button>
            </div>
        )
    }
}
PlayerChange.id = "player_change";

function mapStateToProps(state) {
    const activePlayer = state.app.activePlayer;

    return {
        activePlayer
    };
}

function mapDispatchToProps(dispatch){
    return dispatch((dispatch, getState) => {
        return {
            setNextPlayerActive: () => appActions.setNextPlayerActive(dispatch)(),
            gotoNextView: () => {
                const viewHistory = getState().app.viewHistory;
                const amountOfMatchGoalCalls = viewHistory.filter(v => v == MatchGoals.id).length;
                const eachPlayerHadAMatchGoalCall = amountOfMatchGoalCalls >= playerTypes.length
                if (eachPlayerHadAMatchGoalCall) {
                    return appActions.changeView(dispatch)(MatchNegotiation.id);
                } else {
                    return appActions.changeView(dispatch)(MatchGoals.id);
                }
            },
            gotoStart: () => appActions.changeView(dispatch)(StartScreen.id)
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerChange);
