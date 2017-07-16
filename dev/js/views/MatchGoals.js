import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    StartScreen,
    PlayerChange
} from '.';
import { appActions } from '../actions';
import { ProgressBar } from '../components';
import { config, l } from '../tools';

class MatchGoals extends Component {
    componentWillMount() {
        // this.props.setNextPlayerActive();
    }
    render() {
        const { gotoStart, gotoNextView, playerType, statType, progress } = this.props;

        const { statMaxValue, statHandicapedValue } = config;
        const handicapValue = statMaxValue - statHandicapedValue;
        const handicapPercentage = statMaxValue > 0 ? 100 / statMaxValue * handicapValue : 0;

        const statName = l("stat_" + statType);

        return (
            <div>
                <h1>Match Goals</h1>
                {playerType != "boss" ?
                    <ul className="goal-list">
                        <li>5% Lohn</li>
                        <li>2 Urlaubstage</li>
                        <li>10% Bonus</li>
                    </ul>
                :
                    <ul className="goal-list">
                        <li>-2% Lohn</li>
                        <li>-3 Urlaubstage</li>
                        <li>-12% Bonus</li>
                    </ul>
                }
                <div className="handicap">
                    <h2 className="subheadline">Handicap</h2>
                    {statName ?
                        <p>{handicapPercentage}% {statName}</p>
                    :
                        null
                    }
                    <ProgressBar progress={progress} statType={statType} />
                </div>
                <button onClick={gotoNextView}>Weiter</button>
                <button onClick={gotoStart}>Zurück</button>
            </div>
        )
    }
}
MatchGoals.id = "match_goals";

function mapStateToProps(state) {
    const playerType = state.app.activePlayer;
    const player = playerType != null ? state.players[playerType] : null;

    const statType = player != null ? player.getHandicapedStat() : null;
    const progress = statType != null ? state.players[playerType].stats[statType] : null;

    return {
        playerType,
        statType,
        progress
    };
}

function mapDispatchToProps(dispatch){
    return {
        gotoStart: () => appActions.changeView(dispatch)(StartScreen.id),
        gotoNextView: () => appActions.changeView(dispatch)(PlayerChange.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchGoals);
