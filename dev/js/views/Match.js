import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    StartScreen,
    MatchNegotiation,
    MatchDispute,
    CardOverview
} from '.';
import { appActions } from '../actions';
import {
    Card,
    ProgressBar
} from '../components';
import { config, l } from '../tools';

class Match extends Component {
    render() {
        const { phase, cardHistory, usableCards, displayCard } = this.props;

        const phaseName = l("phase_" + phase);

        return (
            <div className={"match match-" + phase}>
                <h1>{phaseName}</h1>
                <div className="card-history cards-wrapper">
                    {cardHistory.map((type, key) => <Card key={key} type={type} onClick={displayCard(type)} />)}
                </div>
                <div className="playable-cards cards-wrapper">
                    {usableCards.map((type, key) => <Card key={key} type={type} onClick={displayCard(type)} />)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const cardHistory = state.app.cardHistory

    const activePlayerType = state.app.activePlayer;
    const player = state.players[activePlayerType];
    const activePhase = state.app.activePhase;
    const usableCards = player.getUsableCards(props.phase);

    return {
        cardHistory,
        usableCards
    };
}

function mapDispatchToProps(dispatch){
    return {
        gotoStart: () => appActions.changeView(dispatch)(StartScreen.id),
        displayCard: (type) => {
            return () => {
                return appActions.changeView(dispatch)(CardOverview.id, {type});
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);
