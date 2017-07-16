import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    StartScreen,
    MatchGoals
} from '.';
import { appActions } from '../actions';
import { ProgressBar } from '../components';
import { config, l } from '../tools';

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
    return {
        setNextPlayerActive: () => appActions.setNextPlayerActive(dispatch)(),
        gotoNextView: () => appActions.changeView(dispatch)(MatchGoals.id),
        gotoStart: () => appActions.changeView(dispatch)(StartScreen.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerChange);
