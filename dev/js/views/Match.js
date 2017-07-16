import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    StartScreen,
    MatchNegotiation,
    MatchDispute
} from '.';
import { appActions } from '../actions';
import { ProgressBar } from '../components';
import { config, l } from '../tools';

class Match extends Component {
    render() {
        const { phase, usableCards, gotoStart } = this.props;

        const phaseName = l("phase_" + phase);

        return (
            <div className={"match match-" + phase}>
                <h1>{phaseName}</h1>
                <div className="cards-wrapper">
                    {usableCards.map(c => <Card type={c.type} />)}
                </div>
                <button onClick={gotoStart}>Zurück</button>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const activePlayerType = state.app.activePlayer;
    const player = state.players[activePlayerType];
    const activePhase = state.app.activePhase;
    const usableCards = player.getUsableCards(props.phase);

    return {
        usableCards
    };
}

function mapDispatchToProps(dispatch){
    return {
        gotoStart: () => appActions.changeView(dispatch)(StartScreen.id),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);
