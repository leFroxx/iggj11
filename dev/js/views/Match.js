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
        const { phase, usableCards, gotoStart, displayCard } = this.props;

        const phaseName = l("phase_" + phase);

        return (
            <div className={"match match-" + phase}>
                <h1>{phaseName}</h1>
                <div className="cards-wrapper">
                    {usableCards.map((type, key) => <Card key={key} type={type} onClick={displayCard(type)} />)}
                </div>
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
        displayCard: (type) => {
            console.log("click1");
            return () => {
                console.log("click2");
                return appActions.changeView(dispatch)(CardOverview.id, {type});
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);
