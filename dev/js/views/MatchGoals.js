import React, {Component} from 'react';
import {connect} from 'react-redux';

import { StartScreen } from '.';
import { appActions } from '../actions';
import { ProgressBar } from '../components';
import { config, l } from '../tools';

class MatchGoals extends Component {
    componentWillMount() {
        this.props.setNextPlayerActive();
    }
    render() {
        const { gotoStart, statType, progress } = this.props;

        const { statMaxValue, statHandicapedValue } = config;
        const handicapValue = statMaxValue - statHandicapedValue;
        const handicapPercentage = statMaxValue > 0 ? 100 / statMaxValue * handicapValue : 0;

        const statName = l("stat_" + statType);
        console.log(statType);

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
                    {statName ?
                        <p>{handicapPercentage}% {statName}</p>
                    :
                        null
                    }
                    <ProgressBar progress={progress} statType={statType} />
                </div>
                <button onClick={gotoStart}>Zurück</button>
            </div>
        )
    }
}
MatchGoals.id = "match_goals";

function mapStateToProps(state) {
    const playerType = state.app.activePlayer;
    console.log("players");
    console.log(state);
    console.log(playerType);
    console.log(state.players);
    console.log(player);
    console.log(statType);
    console.log(progress);
    const player = playerType != null ? state.players[playerType] : null;

    const statType = player != null ? player.getHandicapedStat() : null;
    const progress = statType != null ? state.players[playerType][statType] : null;

    return {
        statType,
        progress
    };
}

function mapDispatchToProps(dispatch){
    return {
        gotoStart: () => appActions.changeView(dispatch)(StartScreen.id),
        setNextPlayerActive: () => appActions.setNextPlayerActive(dispatch)()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchGoals);
